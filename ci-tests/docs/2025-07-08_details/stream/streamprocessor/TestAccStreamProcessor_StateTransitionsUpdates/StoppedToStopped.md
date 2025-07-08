# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped Test Details
# Found 10 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 9) FAIL
Success rate: 90.00%

## Timeline
### 2025-07-01
#### PASS 15 seconds
```
2025-07-01T08:50:28.2761399Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-01T08:50:28.2763083Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-07-01T08:50:28.2767205Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-01T08:50:28.2776963Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (15.04s)
```
#### PASS 10 seconds
```
2025-07-01T12:50:20.6088244Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-01T12:50:20.6088939Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-07-01T12:50:20.6091092Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-01T12:50:20.6095384Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (10.99s)
```
#### PASS 14 seconds
```
2025-07-01T17:50:24.3510843Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-01T17:50:24.3512278Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-07-01T17:50:24.3516272Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-01T17:50:24.3524439Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (14.04s)
```
### 2025-07-02
#### PASS 11 seconds
```
2025-07-02T00:46:31.9240097Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-02T00:46:31.9241452Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-07-02T00:46:31.9247306Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-02T00:46:31.9253184Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (11.44s)
```
### 2025-07-03
#### PASS 12 seconds
```
2025-07-03T00:46:39.9560644Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-03T00:46:39.9561991Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-07-03T00:46:39.9564490Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-03T00:46:39.9569822Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (12.66s)
```
### 2025-07-04
#### PASS 11 seconds
```
2025-07-04T00:51:07.7074857Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-04T00:51:07.7075605Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-07-04T00:51:07.7079237Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-04T00:51:07.7082780Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (11.05s)
```
### 2025-07-05
#### PASS 14 seconds
```
2025-07-05T00:44:07.5896414Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-05T00:44:07.5897711Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-07-05T00:44:07.5901462Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-05T00:44:07.5909789Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (14.47s)
```
### 2025-07-06
#### FAIL 31 seconds
```
2025-07-06T00:48:43.0094336Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-06T00:48:43.0095043Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-07-06T00:48:43.0097099Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-06T00:48:43.0179546Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-06T00:48:43.0180105Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-07-06T00:48:43.0180452Z         
2025-07-06T00:48:43.0180832Z         Error: error creating resource
2025-07-06T00:48:43.0181102Z         
2025-07-06T00:48:43.0181435Z           with mongodbatlas_stream_connection.sample,
2025-07-06T00:48:43.0182079Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "sample":
2025-07-06T00:48:43.0182680Z           23: 		resource "mongodbatlas_stream_connection" "sample" {
2025-07-06T00:48:43.0182991Z         
2025-07-06T00:48:43.0183858Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-5597241439469417964-STARTED-STOPPED-STOPPED/connections
2025-07-06T00:48:43.0184778Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0185338Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0185719Z         BadRequestDetail: 
2025-07-06T00:48:43.0195774Z    test_terraform_path=/home/runner/work/_temp/571f2434-2bee-44d0-b41d-cfc3e67d82b8/terraform
2025-07-06T00:48:43.0203456Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (31.48s)
```
### 2025-07-07
#### PASS 11 seconds
```
2025-07-07T00:48:05.7827424Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-07T00:48:05.7828156Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-07-07T00:48:05.7830722Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-07T00:48:05.7836157Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (11.05s)
```
### 2025-07-08
#### PASS 11 seconds
```
2025-07-08T00:45:56.1192699Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-08T00:45:56.1193993Z     resource_test.go:171: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-07-08T00:45:56.1198804Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-07-08T00:45:56.1206194Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (11.55s)
```