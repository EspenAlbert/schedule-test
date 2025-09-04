# stream/streamconnection/TestAccStreamRSStreamConnection_sample Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-10 01:15](#error-2025-08-10t0115050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6897e8cd39cf8e2817e3c9dc/streams/test-acc-tf-s-2826854694897715726/connections | qa | flaky_500 | 61.09s
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 5 seconds
- 2025-08-07
  - PASS 57 seconds
  - PASS 7 seconds
- 2025-08-08 PASS 4 seconds
- 2025-08-09 PASS 4 seconds
- 2025-08-10

### Error 2025-08-10T01:15:05+00:00
```
2025-08-10T01:15:05.6176757Z === RUN   TestAccStreamRSStreamConnection_sample
2025-08-10T01:15:05.6187242Z === CONT  TestAccStreamRSStreamConnection_sample
2025-08-10T01:15:05.6208057Z   
2025-08-10T01:15:05.6209008Z     resource_stream_connection_test.go:221: Step 1/2 error: Error running apply: exit status 1
2025-08-10T01:15:05.6209740Z         
2025-08-10T01:15:05.6210207Z         Error: error creating resource
2025-08-10T01:15:05.6210667Z         
2025-08-10T01:15:05.6211245Z           with mongodbatlas_stream_connection.test,
2025-08-10T01:15:05.6212419Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_connection" "test":
2025-08-10T01:15:05.6213496Z           34: 		resource "mongodbatlas_stream_connection" "test" {
2025-08-10T01:15:05.6214032Z         
2025-08-10T01:15:05.6215412Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e8cd39cf8e2817e3c9dc/streams/test-acc-tf-s-2826854694897715726/connections
2025-08-10T01:15:05.6216959Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-10T01:15:05.6217999Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T01:15:05.6218832Z         BadRequestDetail: 
2025-08-10T01:15:05.6384404Z === NAME  TestAccStreamRSStreamConnection_sample
2025-08-10T01:15:05.6384989Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-10T01:15:05.6385415Z         
2025-08-10T01:15:05.6385699Z         Error: error during resource delete
2025-08-10T01:15:05.6385972Z         
2025-08-10T01:15:05.6386656Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e8cd39cf8e2817e3c9dc/streams/test-acc-tf-s-2826854694897715726
2025-08-10T01:15:05.6387428Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-08-10T01:15:05.6388016Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T01:15:05.6388606Z         BadRequestDetail: 
2025-08-10T01:15:05.6388934Z --- FAIL: TestAccStreamRSStreamConnection_sample (61.89s)
```

- 2025-08-11 PASS 4 seconds
- 2025-08-12
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-08-13 PASS 4 seconds
- 2025-08-14 PASS 4 seconds
- 2025-08-15 PASS 4 seconds
- 2025-08-16 PASS 4 seconds
- 2025-08-17 PASS 33 seconds
- 2025-08-18
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-08-19 PASS 6 seconds
- 2025-08-20
  - PASS 5 seconds
  - PASS 17 seconds
- 2025-08-21 PASS 5 seconds
- 2025-08-22 PASS 6 seconds
- 2025-08-23 PASS 4 seconds
- 2025-08-24 PASS 6 seconds
- 2025-08-25 PASS 4 seconds
- 2025-08-26 PASS 4 seconds
- 2025-08-27 PASS 13 seconds
- 2025-08-28 PASS 4 seconds
- 2025-08-29
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-08-30 PASS 6 seconds
- 2025-08-31 PASS 4 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.8630960Z === RUN   TestAccStreamRSStreamConnection_sample
2025-09-01T00:30:38.8632064Z     resource_stream_connection_test.go:217: Creating execution project: test-acc-tf-p-1525768583594977162
2025-09-01T00:30:38.8633031Z     resource_stream_connection_test.go:217: 
2025-09-01T00:30:38.8634903Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.8638304Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.8641546Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.8645308Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:217
2025-09-01T00:30:38.8647138Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.8652166Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8654708Z         	Test:       	TestAccStreamRSStreamConnection_sample
2025-09-01T00:30:38.8658994Z         	Messages:   	Project creation failed: test-acc-tf-p-1525768583594977162, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8661513Z --- FAIL: TestAccStreamRSStreamConnection_sample (0.15s)
```

  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-09-02 PASS 5 seconds
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 4 seconds