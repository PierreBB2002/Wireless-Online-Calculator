// js/script.js

function performCalculation() {
    // Get user inputs
    const bandwidth = parseFloat(document.getElementById('bwidth').value);
    const quantizerBits = parseFloat(document.getElementById('Qbits').value);
    const compressionRate = parseFloat(document.getElementById('compression').value);
    const channelEncoderRate = parseFloat(document.getElementById('chEncoder').value);
    const interleaverBits = parseFloat(document.getElementById('interleaverBits').value);

    // Perform calculations
    // Example calculations (you should replace these with actual calculations required)
    const samplingFreq = bandwidth * 2;
    const quantLevels = 2 ** quantizerBits;
    const sourceBits = samplingFreq * compressionRate * quantizerBits;
    const channelBits = sourceBits * (channelEncoderRate**-1);
    const interleavedBits = channelBits;

    // Display results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h3>Calculation Results:</h3>
        <p>Sampling Frequency:  <span class="results-value">${samplingFreq.toFixed(2)} Hz</p>
        <p>Quantization levels:  <span class="results-value">${quantLevels.toFixed(2)} level</p>
        <p>Bit rate at the output of source encoder: ${sourceBits.toFixed(2)} bps</p>
        <p>Bit rate at the output of channel encoder: ${channelBits.toFixed(2)} bps</p>
        <p>Bit rate at the output of Interleaver: ${interleavedBits.toFixed(2)} bps</p>
    `;
}
