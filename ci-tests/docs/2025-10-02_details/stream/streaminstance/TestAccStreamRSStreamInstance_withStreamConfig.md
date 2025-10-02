# stream/streaminstance/TestAccStreamRSStreamInstance_withStreamConfig Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 44) FAIL(x 3)
Success rate: 93.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:50](#error-2025-09-07t0050490000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1d58704811492b53c49/streams | qa | flaky_500 | 30.09s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c43d444485797b214ef/streams | qa | flaky_500 | 30.09s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b04bfe60767b7f9b139e/streams | qa | flaky_500 | 30.08s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 2 seconds
- 2025-09-04 PASS 2 seconds
- 2025-09-05 PASS 3 seconds
- 2025-09-06 PASS 2 seconds
- 2025-09-07

### Error 2025-09-07T00:50:49+00:00
```
2025-09-07T00:50:49.0251927Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-09-07T00:50:49.0254075Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-09-07T00:50:49.0282868Z === NAME  TestAccStreamRSStreamInstance_withStreamConfig
2025-09-07T00:50:49.0283430Z     resource_stream_instance_test.go:47: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:50:49.0283845Z         
2025-09-07T00:50:49.0284117Z         Error: error creating resource
2025-09-07T00:50:49.0284381Z         
2025-09-07T00:50:49.0284707Z           with mongodbatlas_stream_instance.test,
2025-09-07T00:50:49.0285342Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_instance" "test":
2025-09-07T00:50:49.0286020Z           12: 		resource "mongodbatlas_stream_instance" "test" {
2025-09-07T00:50:49.0286325Z         
2025-09-07T00:50:49.0286827Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d58704811492b53c49/streams
2025-09-07T00:50:49.0287493Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:50:49.0288078Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:50:49.0288465Z         BadRequestDetail: 
2025-09-07T00:50:49.0289196Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (30.88s)
```

- 2025-09-08
  - PASS 2 seconds
  - PASS 26 seconds
  - PASS 2 seconds
- 2025-09-09 PASS 2 seconds
- 2025-09-10 PASS 3 seconds
- 2025-09-11 PASS 2 seconds
- 2025-09-12
  - PASS 3 seconds
  - PASS 2 seconds
- 2025-09-13 PASS 3 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8065319Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-09-14T00:45:38.8067436Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-09-14T00:45:38.8096720Z === NAME  TestAccStreamRSStreamInstance_withStreamConfig
2025-09-14T00:45:38.8097413Z     resource_stream_instance_test.go:47: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:45:38.8097883Z         
2025-09-14T00:45:38.8098317Z         Error: error creating resource
2025-09-14T00:45:38.8098585Z         
2025-09-14T00:45:38.8099165Z           with mongodbatlas_stream_instance.test,
2025-09-14T00:45:38.8099994Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_instance" "test":
2025-09-14T00:45:38.8100705Z           12: 		resource "mongodbatlas_stream_instance" "test" {
2025-09-14T00:45:38.8101024Z         
2025-09-14T00:45:38.8101652Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c43d444485797b214ef/streams
2025-09-14T00:45:38.8102446Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:45:38.8103152Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:45:38.8103551Z         BadRequestDetail: 
2025-09-14T00:45:38.8115606Z    test_step_number=1 test_name=TestAccStreamDSStreamInstances_basic
2025-09-14T00:45:38.8146244Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (30.86s)
```

- 2025-09-15
  - PASS 2 seconds
  - PASS 3 seconds
  - FAIL 30 seconds

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0274253Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-09-15T06:36:28.0276361Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-09-15T06:36:28.0288745Z === NAME  TestAccStreamRSStreamInstance_withStreamConfig
2025-09-15T06:36:28.0289324Z     resource_stream_instance_test.go:47: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:36:28.0289763Z         
2025-09-15T06:36:28.0290049Z         Error: error creating resource
2025-09-15T06:36:28.0290323Z         
2025-09-15T06:36:28.0290656Z           with mongodbatlas_stream_instance.test,
2025-09-15T06:36:28.0291304Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_instance" "test":
2025-09-15T06:36:28.0291900Z           12: 		resource "mongodbatlas_stream_instance" "test" {
2025-09-15T06:36:28.0292213Z         
2025-09-15T06:36:28.0292724Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04bfe60767b7f9b139e/streams
2025-09-15T06:36:28.0293418Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:36:28.0294009Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:36:28.0294408Z         BadRequestDetail: 
2025-09-15T06:36:28.0294763Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (30.80s)
```

- 2025-09-16 PASS 2 seconds
- 2025-09-17 PASS 3 seconds
- 2025-09-18 PASS 2 seconds
- 2025-09-19 PASS 2 seconds
- 2025-09-20 PASS 2 seconds
- 2025-09-21 PASS 2 seconds
- 2025-09-22 PASS 3 seconds
- 2025-09-23 PASS 2 seconds
- 2025-09-24 PASS 2 seconds
- 2025-09-25 PASS 2 seconds
- 2025-09-26 PASS 2 seconds
- 2025-09-27 PASS 3 seconds
- 2025-09-28 PASS 2 seconds
- 2025-09-29
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-09-30
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 3 seconds
- 2025-10-01
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 3 seconds
- 2025-10-02 PASS 2 seconds