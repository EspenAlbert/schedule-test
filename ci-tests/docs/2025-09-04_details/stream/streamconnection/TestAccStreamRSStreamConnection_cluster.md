# stream/streamconnection/TestAccStreamRSStreamConnection_cluster Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3)
Success rate: 92.86%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-10 01:15](#error-2025-08-10t0115050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6897e8cd39cf8e2817e3c9dc/streams/test-acc-tf-s-2539241424947313573/connections | qa | flaky_500 | 54.02s
[2025-08-17 01:18](#error-2025-08-17t0118020000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122d8aafa9a76ca8bc085/streams/test-acc-tf-s-6508215644362021561/connections | qa | flaky_500 | 31.08s
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 5 seconds
- 2025-08-07
  - PASS 37 seconds
  - PASS 6 seconds
- 2025-08-08 PASS 4 seconds
- 2025-08-09 PASS 4 seconds
- 2025-08-10

### Error 2025-08-10T01:15:05+00:00
```
2025-08-10T01:15:05.6175514Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-08-10T01:15:05.6183377Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-08-10T01:15:05.6306959Z === NAME  TestAccStreamRSStreamConnection_cluster
2025-08-10T01:15:05.6307972Z     resource_stream_connection_test.go:183: Step 1/2 error: Error running apply: exit status 1
2025-08-10T01:15:05.6309210Z         
2025-08-10T01:15:05.6309995Z         Error: error creating resource
2025-08-10T01:15:05.6310670Z         
2025-08-10T01:15:05.6311473Z           with mongodbatlas_stream_connection.test,
2025-08-10T01:15:05.6312526Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-08-10T01:15:05.6313299Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-08-10T01:15:05.6313707Z         
2025-08-10T01:15:05.6314669Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e8cd39cf8e2817e3c9dc/streams/test-acc-tf-s-2539241424947313573/connections
2025-08-10T01:15:05.6315739Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-10T01:15:05.6316464Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T01:15:05.6316943Z         BadRequestDetail: 
2025-08-10T01:15:05.6330301Z   
2025-08-10T01:15:05.6336889Z --- FAIL: TestAccStreamRSStreamConnection_cluster (54.15s)
```

- 2025-08-11 PASS 4 seconds
- 2025-08-12
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-08-13 PASS 4 seconds
- 2025-08-14 PASS 3 seconds
- 2025-08-15 PASS 4 seconds
- 2025-08-16 PASS 4 seconds
- 2025-08-17

### Error 2025-08-17T01:18:02+00:00
```
2025-08-17T01:18:02.6265866Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-08-17T01:18:02.6273969Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-08-17T01:18:02.6442432Z === NAME  TestAccStreamRSStreamConnection_cluster
2025-08-17T01:18:02.6443447Z     resource_stream_connection_test.go:183: Step 1/2 error: Error running apply: exit status 1
2025-08-17T01:18:02.6444188Z         
2025-08-17T01:18:02.6444651Z         Error: error fetching results
2025-08-17T01:18:02.6445103Z         
2025-08-17T01:18:02.6445734Z           with data.mongodbatlas_stream_connections.test,
2025-08-17T01:18:02.6447079Z           on terraform_plugin_test.tf line 18, in data "mongodbatlas_stream_connections" "test":
2025-08-17T01:18:02.6448119Z           18: data "mongodbatlas_stream_connections" "test" {
2025-08-17T01:18:02.6448642Z         
2025-08-17T01:18:02.6450270Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122d8aafa9a76ca8bc085/streams/test-acc-tf-s-6508215644362021561/connections
2025-08-17T01:18:02.6451837Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T01:18:02.6452867Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T01:18:02.6453551Z         BadRequestDetail: 
2025-08-17T01:18:02.6454098Z --- FAIL: TestAccStreamRSStreamConnection_cluster (31.78s)
```

- 2025-08-18
  - PASS 3 seconds
  - PASS 5 seconds
- 2025-08-19 PASS 5 seconds
- 2025-08-20
  - PASS 5 seconds
  - PASS 17 seconds
- 2025-08-21 PASS 4 seconds
- 2025-08-22 PASS 6 seconds
- 2025-08-23 PASS 4 seconds
- 2025-08-24 PASS 5 seconds
- 2025-08-25 PASS 4 seconds
- 2025-08-26 PASS 4 seconds
- 2025-08-27 PASS 10 seconds
- 2025-08-28 PASS 4 seconds
- 2025-08-29
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-08-30 PASS 5 seconds
- 2025-08-31 PASS 4 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.8592884Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-09-01T00:30:38.8594043Z     resource_stream_connection_test.go:182: Creating execution project: test-acc-tf-p-4262722367417061693
2025-09-01T00:30:38.8595049Z     resource_stream_connection_test.go:182: 
2025-09-01T00:30:38.8596953Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.8600286Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.8604488Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:120
2025-09-01T00:30:38.8608605Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:189
2025-09-01T00:30:38.8612706Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:182
2025-09-01T00:30:38.8614977Z         	            				/opt/hostedtoolcache/go/1.24.6/x64/src/runtime/asm_amd64.s:1700
2025-09-01T00:30:38.8615832Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.8621010Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8623384Z         	Test:       	TestAccStreamRSStreamConnection_cluster
2025-09-01T00:30:38.8627659Z         	Messages:   	Project creation failed: test-acc-tf-p-4262722367417061693, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8630291Z --- FAIL: TestAccStreamRSStreamConnection_cluster (0.17s)
```

  - PASS 11 minutes
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-09-02 PASS 4 seconds
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 5 seconds