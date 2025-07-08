# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted Test Details
# Found 10 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 9) FAIL
Success rate: 90.00%

## Timeline
### 2025-07-01
#### PASS 14 seconds
```
2025-07-01T08:50:28.2754637Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-01T08:50:28.2756108Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-07-01T08:50:28.2766277Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-01T08:50:28.2775772Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (14.63s)
```
#### PASS 12 seconds
```
2025-07-01T12:50:20.6084652Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-01T12:50:20.6085348Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-07-01T12:50:20.6090619Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-01T12:50:20.6095999Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (12.20s)
```
#### PASS 14 seconds
```
2025-07-01T17:50:24.3504495Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-01T17:50:24.3505813Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-07-01T17:50:24.3515376Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-01T17:50:24.3525597Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (14.06s)
```
### 2025-07-02
#### PASS 11 seconds
```
2025-07-02T00:46:31.9233380Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-02T00:46:31.9234734Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-07-02T00:46:31.9244592Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-02T00:46:31.9253837Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (11.86s)
```
### 2025-07-03
#### PASS 12 seconds
```
2025-07-03T00:46:39.9554914Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-03T00:46:39.9556145Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-07-03T00:46:39.9564003Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-03T00:46:39.9569190Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (12.63s)
```
### 2025-07-04
#### PASS 12 seconds
```
2025-07-04T00:51:07.7069520Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-04T00:51:07.7070676Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-07-04T00:51:07.7077502Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-04T00:51:07.7083439Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (12.07s)
```
### 2025-07-05
#### PASS 14 seconds
```
2025-07-05T00:44:07.5889806Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-05T00:44:07.5891248Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-07-05T00:44:07.5900588Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-05T00:44:07.5910939Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (14.48s)
```
### 2025-07-06
#### FAIL 31 seconds
```
2025-07-06T00:48:43.0090868Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-06T00:48:43.0091580Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-07-06T00:48:43.0096620Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-06T00:48:43.0161195Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-06T00:48:43.0161756Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:48:43.0162104Z         
2025-07-06T00:48:43.0162366Z         Error: error creating resource
2025-07-06T00:48:43.0162624Z         
2025-07-06T00:48:43.0162956Z           with mongodbatlas_stream_connection.sample,
2025-07-06T00:48:43.0163605Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "sample":
2025-07-06T00:48:43.0164206Z           23: 		resource "mongodbatlas_stream_connection" "sample" {
2025-07-06T00:48:43.0164522Z         
2025-07-06T00:48:43.0165339Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-2928671464252808851--STARTED-STARTED/connections
2025-07-06T00:48:43.0166348Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0166915Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0167287Z         BadRequestDetail: 
2025-07-06T00:48:43.0179235Z   
2025-07-06T00:48:43.0204193Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (31.54s)
```
### 2025-07-07
#### PASS 12 seconds
```
2025-07-07T00:48:05.7823799Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-07T00:48:05.7824500Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-07-07T00:48:05.7830002Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-07T00:48:05.7836890Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (12.34s)
```
### 2025-07-08
#### PASS 12 seconds
```
2025-07-08T00:45:56.1186185Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-08T00:45:56.1187661Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-07-08T00:45:56.1197044Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-08T00:45:56.1207335Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (12.57s)
```