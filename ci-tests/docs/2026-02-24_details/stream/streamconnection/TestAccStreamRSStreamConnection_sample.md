# stream/streamconnection/TestAccStreamRSStreamConnection_sample Test Details
# Found 34 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-12 18:47](#error-2026-02-12t1847250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 2.02s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 6 seconds
- 2026-01-27 PASS 6 seconds
- 2026-01-28 PASS 6 seconds
- 2026-01-29 PASS 6 seconds
- 2026-01-30: MISSING
- 2026-01-31 PASS 6 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 6 seconds
- 2026-02-03
  - PASS 11 seconds
  - PASS 10 seconds
- 2026-02-04 PASS 7 seconds
- 2026-02-05 PASS 6 seconds
- 2026-02-06 PASS 7 seconds
- 2026-02-07
  - PASS 7 seconds
  - PASS 6 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 6 seconds
- 2026-02-10 PASS 6 seconds
- 2026-02-11 PASS 9 seconds
- 2026-02-12
  - PASS 6 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:25+00:00
```
2026-02-12T18:47:25.6550395Z === RUN   TestAccStreamRSStreamConnection_sample
2026-02-12T18:47:25.6551443Z     resource_stream_connection_test.go:354: Creating execution project (1): test-acc-tf-p-6597997878842731647
2026-02-12T18:47:25.6552380Z     resource_stream_connection_test.go:354: 
2026-02-12T18:47:25.6554061Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:25.6556974Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:25.6560135Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:25.6563133Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:25.6566501Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:354
2026-02-12T18:47:25.6568731Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-12T18:47:25.6569542Z         	Error:      	Received unexpected error:
2026-02-12T18:47:25.6574098Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6576373Z         	Test:       	TestAccStreamRSStreamConnection_sample
2026-02-12T18:47:25.6580325Z         	Messages:   	Project creation failed: test-acc-tf-p-6597997878842731647, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6582851Z --- FAIL: TestAccStreamRSStreamConnection_sample (0.25s)
```

- 2026-02-13 PASS 8 seconds
- 2026-02-14 PASS 6 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 7 seconds
- 2026-02-17 PASS 6 seconds
- 2026-02-18 PASS 7 seconds
- 2026-02-19 PASS 6 seconds
- 2026-02-20 PASS 8 seconds
- 2026-02-21 PASS 7 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 8 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2026996Z === RUN   TestAccStreamRSStreamConnection_sample
2026-02-24T01:09:13.2038134Z === CONT  TestAccStreamRSStreamConnection_sample
2026-02-24T01:09:13.2161138Z === NAME  TestAccStreamRSStreamConnection_sample
2026-02-24T01:09:13.2161919Z     resource_stream_connection_test.go:358: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:09:13.2162384Z         
2026-02-24T01:09:13.2162675Z         Error: error creating resource
2026-02-24T01:09:13.2162963Z         
2026-02-24T01:09:13.2163313Z           with mongodbatlas_stream_connection.test,
2026-02-24T01:09:13.2164015Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_stream_connection" "test":
2026-02-24T01:09:13.2164666Z           36: 		resource "mongodbatlas_stream_connection" "test" {
2026-02-24T01:09:13.2165017Z         
2026-02-24T01:09:13.2165498Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2165923Z         type
2026-02-24T01:09:13.2166223Z --- FAIL: TestAccStreamRSStreamConnection_sample (2.23s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 7 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 8 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 7 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 6 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 6 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 7 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
