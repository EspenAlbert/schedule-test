# stream/streamconnection/TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL(x 2)
Success rate: 94.59%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-12 18:47](#error-2026-02-12t1847250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 1.04s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 9 seconds
- 2026-02-06 PASS 6 seconds
- 2026-02-07
  - PASS 7 seconds
  - PASS 4 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 5 seconds
- 2026-02-10 PASS 5 seconds
- 2026-02-11 PASS 7 seconds
- 2026-02-12
  - PASS 5 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:25+00:00
```
2026-02-12T18:47:25.6752404Z === RUN   TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit
2026-02-12T18:47:25.6753553Z     resource_stream_connection_test.go:624: Creating execution project (1): test-acc-tf-p-6096802493425809535
2026-02-12T18:47:25.6754490Z     resource_stream_connection_test.go:624: 
2026-02-12T18:47:25.6756007Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:25.6759386Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:25.6762368Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:25.6765346Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:25.6768866Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:624
2026-02-12T18:47:25.6770929Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-12T18:47:25.6771730Z         	Error:      	Received unexpected error:
2026-02-12T18:47:25.6776285Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6779065Z         	Test:       	TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit
2026-02-12T18:47:25.6783146Z         	Messages:   	Project creation failed: test-acc-tf-p-6096802493425809535, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6785808Z --- FAIL: TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit (0.23s)
```

- 2026-02-13 PASS 6 seconds
- 2026-02-14 PASS 6 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 5 seconds
- 2026-02-17 PASS 4 seconds
- 2026-02-18 PASS 5 seconds
- 2026-02-19 PASS 5 seconds
- 2026-02-20 PASS 6 seconds
- 2026-02-21 PASS 6 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 8 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2034084Z === RUN   TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit
2026-02-24T01:09:13.2036963Z === CONT  TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit
2026-02-24T01:09:13.2060749Z === NAME  TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit
2026-02-24T01:09:13.2061827Z     resource_stream_connection_test.go:628: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:09:13.2062611Z         
2026-02-24T01:09:13.2063025Z         Error: error creating resource
2026-02-24T01:09:13.2063323Z         
2026-02-24T01:09:13.2063678Z           with mongodbatlas_stream_connection.test,
2026-02-24T01:09:13.2064382Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_stream_connection" "test":
2026-02-24T01:09:13.2065059Z           19: 		resource "mongodbatlas_stream_connection" "test" {
2026-02-24T01:09:13.2065407Z         
2026-02-24T01:09:13.2065889Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2066322Z         type
2026-02-24T01:09:13.2079113Z   
2026-02-24T01:09:13.2100278Z --- FAIL: TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit (1.36s)
```

- 2026-02-25
  - PASS 6 seconds
  - PASS 5 seconds
- 2026-02-26 PASS 7 seconds
- 2026-02-27
  - PASS 5 seconds
  - PASS 7 seconds
- 2026-02-28 PASS 7 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 6 seconds
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
- 2026-02-08 PASS 6 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 5 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 7 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 5 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 6 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 6 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
