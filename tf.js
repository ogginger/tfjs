//tf.js: Functional Logic.

define(["@tensorflow/tfjs"], function( tf ) {
  //train the model
  /*
    1. fitCallbacks show th
  */
  return async function( model, data, fitCallbacks ) {
    const BATCH_SIZE = 64;
    const trainDataSize = 500;
    const testDataSize = 100;
    const [trainXs, trainYs] = tf.tidy(() => {
      const d = data.nextTrainBatch(trainDataSize);
      return [d.xs.reshape([trainDataSize, 28, 28, 1]), d.labels];
    });
    const [testXs, testYs] = tf.tidy(() => {
      const d = data.nextTestBatch(testDataSize);
      return [d.xs.reshape([testDataSize, 28, 28, 1]), d.labels];
    });
    return model.fit(trainXs, trainYs, {
      batchSize: BATCH_SIZE,
      validationData: [testXs, testYs],
      epochs: 10,
      shuffle: true,
      callbacks: fitCallbacks
    });
  };
});
