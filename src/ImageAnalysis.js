import React, { useState, useRef } from 'react';

const ImageAnalysis = ({ showNotification, openModal }) => {
  const fileInputRef = useRef(null);
  const [analysisResults, setAnalysisResults] = useState(null);

  const handleFileUpload = (e) => {
    try {
      const files = e.dataTransfer ? e.dataTransfer.files : e.target.files;

      if (files && files.length > 0) {
        processUploadedFiles(files);
      }
    } catch (error) {
      console.error('Error handling file upload:', error);
    }
  };

  const processUploadedFiles = (files) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    Array.from(files).forEach((file) => {
      if (!validTypes.includes(file.type)) {
        showNotification('Please upload only JPEG or PNG images', 'error');
        return;
      }

      if (file.size > maxSize) {
        showNotification('File size should be less than 5MB', 'error');
        return;
      }

      uploadFile(file);
    });
  };

  const uploadFile = (file) => {
    // Simulate file processing (replace with actual API call)
    setAnalysisResults({ name: file.name, processing: true });

    setTimeout(() => {
      showAnalysisResults(file);
    }, 2500);
  };

  const showAnalysisResults = (file) => {
    setAnalysisResults({
      name: file.name,
      processing: false,
      data: {
        surfaceType: 'Interior wall surface with minor imperfections',
        recommendedServices: [
          'Quartz Plaster - For seamless finish',
          'Texture Coatings - For enhanced durability',
        ],
        estimatedArea: 'Approximately 150-200 sq ft',
      },
    });
    // Reset upload area after showing results
    setTimeout(() => resetUploadArea(), 500);
  };

  const resetUploadArea = () => {
    setAnalysisResults(null);
  };

  return (
    <section className="image-analysis" id="analysis">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Wall Surface Analysis</h2>
          <p className="section-subtitle">Upload images of your walls for professional analysis and recommendations</p>
        </div>
        <div className="analysis-container">
          {!analysisResults || analysisResults.processing ? (
            <div
              className={`upload-area ${analysisResults?.processing ? 'processing' : ''}`}
              id="uploadArea"
              onClick={() => fileInputRef.current.click()}
              onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('dragover'); }}
              onDragLeave={(e) => { e.preventDefault(); e.currentTarget.classList.remove('dragover'); }}
              onDrop={(e) => { e.preventDefault(); e.currentTarget.classList.remove('dragover'); handleFileUpload(e); }}
            >
              <div className="upload-content">
                <div className="upload-icon">{analysisResults?.processing ? '📁' : '📷'}</div>
                <h3>{analysisResults?.processing ? 'Processing Image...' : 'Upload Wall Images'}</h3>
                <p>{analysisResults?.processing ? analysisResults.name : 'Drag and drop images or click to browse'}</p>
                {!analysisResults?.processing && (
                  <button className="btn btn--primary" id="uploadBtn" onClick={(e) => { e.stopPropagation(); fileInputRef.current.click(); }}>Choose Files</button>
                )}
                {analysisResults?.processing && (
                  <div className="progress-bar" style={{ width: '100%', height: '4px', background: 'var(--color-secondary)', borderRadius: '2px', overflow: 'hidden', marginTop: '16px' }}>
                    <div className="progress-fill" style={{ width: '100%', height: '100%', background: 'var(--color-primary)', transition: 'width 2s ease-in-out' }}></div>
                  </div>
                )}
                <input type="file" id="fileInput" multiple accept="image/*" style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileUpload} />
              </div>
            </div>
          ) : (
            <div className="analysis-results" id="analysisResults">
              <h3>Analysis Results for {analysisResults.name}</h3>
              <div className="results-content">
                <div className="analysis-item" style={{ marginBottom: '16px' }}>
                  <h4 style={{ marginBottom: '8px', color: 'var(--color-text)' }}>Surface Type Detected:</h4>
                  <p style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>{analysisResults.data.surfaceType}</p>
                </div>
                <div className="analysis-item" style={{ marginBottom: '16px' }}>
                  <h4 style={{ marginBottom: '8px', color: 'var(--color-text)' }}>Recommended Services:</h4>
                  <ul style={{ color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
                    {analysisResults.data.recommendedServices.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
                <div className="analysis-item" style={{ marginBottom: '16px' }}>
                  <h4 style={{ marginBottom: '8px', color: 'var(--color-text)' }}>Estimated Area:</h4>
                  <p style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>{analysisResults.data.estimatedArea}</p>
                </div>
                <button className="btn btn--primary" onClick={() => openModal('quoteModal')}>Get Detailed Quote</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageAnalysis;
