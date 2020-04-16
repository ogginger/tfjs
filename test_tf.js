//test_tf.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "tf"
], function(
  TestSuite,
  log,
  tf
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_tf initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "tf" );
            
      xTestSuite.test();
    }
  });
});
