# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted Test Details
# Found 10 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 9) FAIL
Success rate: 90.00%

## Timeline
### 2025-07-01
#### PASS 11 seconds
```
2025-07-01T08:50:28.2747911Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-01T08:50:28.2749289Z     resource_test.go:171: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-07-01T08:50:28.2770020Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-01T08:50:28.2773330Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (11.10s)
```
#### PASS 8 seconds
```
2025-07-01T12:50:20.6081227Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-01T12:50:20.6081852Z     resource_test.go:171: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-07-01T12:50:20.6092044Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-01T12:50:20.6094153Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (8.84s)
```
#### PASS 9 seconds
```
2025-07-01T17:50:24.3497917Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-01T17:50:24.3499142Z     resource_test.go:171: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-07-01T17:50:24.3518918Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-01T17:50:24.3522113Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (9.96s)
```
### 2025-07-02
#### PASS 8 seconds
```
2025-07-02T00:46:31.9226883Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-02T00:46:31.9228104Z     resource_test.go:171: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-07-02T00:46:31.9246403Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-02T00:46:31.9251350Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (8.92s)
```
### 2025-07-03
#### PASS 9 seconds
```
2025-07-03T00:46:39.9551504Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-03T00:46:39.9552162Z     resource_test.go:171: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-07-03T00:46:39.9566202Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-03T00:46:39.9567921Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (9.52s)
```
### 2025-07-04
#### PASS 8 seconds
```
2025-07-04T00:51:07.7065527Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-04T00:51:07.7066192Z     resource_test.go:171: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-07-04T00:51:07.7078739Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-04T00:51:07.7081476Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (8.76s)
```
### 2025-07-05
#### PASS 10 seconds
```
2025-07-05T00:44:07.5883616Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-05T00:44:07.5884936Z     resource_test.go:171: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-07-05T00:44:07.5904489Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-05T00:44:07.5907505Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (10.55s)
```
### 2025-07-06
#### FAIL 31 seconds
```
2025-07-06T00:48:43.0087288Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-06T00:48:43.0088044Z     resource_test.go:171: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-07-06T00:48:43.0098817Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-06T00:48:43.0109635Z    test_step_number=1
2025-07-06T00:48:43.0126677Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-06T00:48:43.0127238Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:48:43.0127699Z         
2025-07-06T00:48:43.0127962Z         Error: error creating resource
2025-07-06T00:48:43.0128224Z         
2025-07-06T00:48:43.0128547Z           with mongodbatlas_stream_instance.instance,
2025-07-06T00:48:43.0129187Z           on terraform_plugin_test.tf line 11, in resource "mongodbatlas_stream_instance" "instance":
2025-07-06T00:48:43.0129780Z           11: resource "mongodbatlas_stream_instance" "instance" {
2025-07-06T00:48:43.0130094Z         
2025-07-06T00:48:43.0130574Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams
2025-07-06T00:48:43.0131231Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0131802Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0132176Z         BadRequestDetail: 
2025-07-06T00:48:43.0143164Z   
2025-07-06T00:48:43.0202204Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (31.00s)
```
### 2025-07-07
#### PASS 8 seconds
```
2025-07-07T00:48:05.7820321Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-07T00:48:05.7820956Z     resource_test.go:171: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-07-07T00:48:05.7832570Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-07T00:48:05.7834572Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (8.78s)
```
### 2025-07-08
#### PASS 9 seconds
```
2025-07-08T00:45:56.1179956Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-08T00:45:56.1181105Z     resource_test.go:171: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-07-08T00:45:56.1200538Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-08T00:45:56.1203723Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (9.42s)
```