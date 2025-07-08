# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped Test Details
# Found 9 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
### 2025-07-01
#### PASS 10 seconds
#### PASS 14 seconds
### 2025-07-02
#### PASS 11 seconds
### 2025-07-03
#### PASS 12 seconds
### 2025-07-04
#### PASS 11 seconds
### 2025-07-05
#### PASS 14 seconds
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
### 2025-07-08
#### PASS 11 seconds