# stream/streamconnection/TestAccStreamRSStreamConnection_SchemaRegistry Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL(x 2)
Success rate: 94.59%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-12 18:47](#error-2026-02-12t1847250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 1.05s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 4 seconds
- 2026-02-06 PASS 6 seconds
- 2026-02-07
  - PASS 7 seconds
  - PASS 5 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 6 seconds
- 2026-02-10 PASS 6 seconds
- 2026-02-11 PASS 7 seconds
- 2026-02-12
  - PASS 5 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:25+00:00
```
2026-02-12T18:47:25.6718971Z === RUN   TestAccStreamRSStreamConnection_SchemaRegistry
2026-02-12T18:47:25.6720059Z     resource_stream_connection_test.go:555: Creating execution project (1): test-acc-tf-p-8863848360028170150
2026-02-12T18:47:25.6721001Z     resource_stream_connection_test.go:555: 
2026-02-12T18:47:25.6722677Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:25.6725591Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:25.6728665Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:25.6731605Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:25.6734961Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:555
2026-02-12T18:47:25.6737015Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-12T18:47:25.6738172Z         	Error:      	Received unexpected error:
2026-02-12T18:47:25.6742714Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6745042Z         	Test:       	TestAccStreamRSStreamConnection_SchemaRegistry
2026-02-12T18:47:25.6749078Z         	Messages:   	Project creation failed: test-acc-tf-p-8863848360028170150, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6751638Z --- FAIL: TestAccStreamRSStreamConnection_SchemaRegistry (0.24s)
```

- 2026-02-13 PASS 5 seconds
- 2026-02-14 PASS 6 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 6 seconds
- 2026-02-17 PASS 4 seconds
- 2026-02-18 PASS 6 seconds
- 2026-02-19 PASS 5 seconds
- 2026-02-20 PASS 6 seconds
- 2026-02-21 PASS 5 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 7 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2033228Z === RUN   TestAccStreamRSStreamConnection_SchemaRegistry
2026-02-24T01:09:13.2036133Z === CONT  TestAccStreamRSStreamConnection_SchemaRegistry
2026-02-24T01:09:13.2079403Z === NAME  TestAccStreamRSStreamConnection_SchemaRegistry
2026-02-24T01:09:13.2080033Z     resource_stream_connection_test.go:561: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:09:13.2080497Z         
2026-02-24T01:09:13.2080785Z         Error: error creating resource
2026-02-24T01:09:13.2081079Z         
2026-02-24T01:09:13.2081610Z           with mongodbatlas_stream_connection.test,
2026-02-24T01:09:13.2082356Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_stream_connection" "test":
2026-02-24T01:09:13.2083017Z           19: 		resource "mongodbatlas_stream_connection" "test" {
2026-02-24T01:09:13.2083358Z         
2026-02-24T01:09:13.2083838Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2084262Z         type
2026-02-24T01:09:13.2090331Z   
2026-02-24T01:09:13.2150632Z --- FAIL: TestAccStreamRSStreamConnection_SchemaRegistry (1.47s)
```

- 2026-02-25
  - PASS 6 seconds
  - PASS 5 seconds
- 2026-02-26 PASS 7 seconds
- 2026-02-27
  - PASS 7 seconds
  - PASS 9 seconds
- 2026-02-28 PASS 6 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 7 seconds
- 2026-03-03 PASS 7 seconds
- 2026-03-04 PASS 6 seconds
- 2026-03-05 PASS 7 seconds
- 2026-03-06 PASS 7 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 6 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 5 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 6 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 5 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 6 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 5 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 6 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
