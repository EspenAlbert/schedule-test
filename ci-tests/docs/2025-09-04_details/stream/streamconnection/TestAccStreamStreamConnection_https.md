# stream/streamconnection/TestAccStreamStreamConnection_https Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3)
Success rate: 92.86%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-10 01:15](#error-2025-08-10t0115050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6897e8cd39cf8e2817e3c9dc/streams/test-acc-tf-s-2539241424947313573/connections | qa | flaky_500 | 54.07s
[2025-08-17 01:18](#error-2025-08-17t0118020000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122d8aafa9a76ca8bc085/streams/test-acc-tf-s-6508215644362021561/connections | qa | flaky_500 | 30.10s
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 8 seconds
- 2025-08-07
  - PASS a minute
  - PASS 12 seconds
- 2025-08-08 PASS 7 seconds
- 2025-08-09 PASS 6 seconds
- 2025-08-10

### Error 2025-08-10T01:15:05+00:00
```
2025-08-10T01:15:05.6177952Z === RUN   TestAccStreamStreamConnection_https
2025-08-10T01:15:05.6184635Z === CONT  TestAccStreamStreamConnection_https
2025-08-10T01:15:05.6349482Z === NAME  TestAccStreamStreamConnection_https
2025-08-10T01:15:05.6350035Z     resource_stream_connection_test.go:257: Step 1/4 error: Error running apply: exit status 1
2025-08-10T01:15:05.6350446Z         
2025-08-10T01:15:05.6350718Z         Error: error creating resource
2025-08-10T01:15:05.6350985Z         
2025-08-10T01:15:05.6351309Z           with mongodbatlas_stream_connection.test,
2025-08-10T01:15:05.6351949Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-08-10T01:15:05.6352549Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-08-10T01:15:05.6352855Z         
2025-08-10T01:15:05.6353618Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e8cd39cf8e2817e3c9dc/streams/test-acc-tf-s-2539241424947313573/connections
2025-08-10T01:15:05.6354483Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-10T01:15:05.6355072Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T01:15:05.6355459Z         BadRequestDetail: 
2025-08-10T01:15:05.6355764Z --- FAIL: TestAccStreamStreamConnection_https (54.74s)
```

- 2025-08-11 PASS 7 seconds
- 2025-08-12
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-08-13 PASS 7 seconds
- 2025-08-14 PASS 6 seconds
- 2025-08-15 PASS 7 seconds
- 2025-08-16 PASS 6 seconds
- 2025-08-17

### Error 2025-08-17T01:18:02+00:00
```
2025-08-17T01:18:02.6268280Z === RUN   TestAccStreamStreamConnection_https
2025-08-17T01:18:02.6275836Z === CONT  TestAccStreamStreamConnection_https
2025-08-17T01:18:02.6299036Z === NAME  TestAccStreamStreamConnection_https
2025-08-17T01:18:02.6300039Z     resource_stream_connection_test.go:257: Step 1/4 error: Error running apply: exit status 1
2025-08-17T01:18:02.6300791Z         
2025-08-17T01:18:02.6301261Z         Error: error creating resource
2025-08-17T01:18:02.6301714Z         
2025-08-17T01:18:02.6302293Z           with mongodbatlas_stream_connection.test,
2025-08-17T01:18:02.6303461Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-08-17T01:18:02.6304537Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-08-17T01:18:02.6305076Z         
2025-08-17T01:18:02.6306514Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122d8aafa9a76ca8bc085/streams/test-acc-tf-s-6508215644362021561/connections
2025-08-17T01:18:02.6308060Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T01:18:02.6309439Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T01:18:02.6310143Z         BadRequestDetail: 
2025-08-17T01:18:02.6310667Z --- FAIL: TestAccStreamStreamConnection_https (30.98s)
```

- 2025-08-18
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-08-19 PASS 9 seconds
- 2025-08-20
  - PASS 9 seconds
  - PASS 21 seconds
- 2025-08-21 PASS 8 seconds
- 2025-08-22 PASS 10 seconds
- 2025-08-23 PASS 7 seconds
- 2025-08-24 PASS 9 seconds
- 2025-08-25 PASS 6 seconds
- 2025-08-26 PASS 6 seconds
- 2025-08-27 PASS 16 seconds
- 2025-08-28 PASS 6 seconds
- 2025-08-29
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-08-30 PASS 9 seconds
- 2025-08-31 PASS 7 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.8662162Z === RUN   TestAccStreamStreamConnection_https
2025-09-01T00:30:38.8663253Z     resource_stream_connection_test.go:245: Creating execution project: test-acc-tf-p-376428616166302099
2025-09-01T00:30:38.8664225Z     resource_stream_connection_test.go:245: 
2025-09-01T00:30:38.8665908Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.8669266Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.8672507Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.8676291Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:245
2025-09-01T00:30:38.8678010Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.8682981Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8685315Z         	Test:       	TestAccStreamStreamConnection_https
2025-09-01T00:30:38.8689513Z         	Messages:   	Project creation failed: test-acc-tf-p-376428616166302099, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8692122Z --- FAIL: TestAccStreamStreamConnection_https (0.15s)
```

  - PASS 5 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 7 seconds
  - PASS 5 seconds
- 2025-09-02 PASS 8 seconds
- 2025-09-03 PASS 6 seconds
- 2025-09-04 PASS 7 seconds