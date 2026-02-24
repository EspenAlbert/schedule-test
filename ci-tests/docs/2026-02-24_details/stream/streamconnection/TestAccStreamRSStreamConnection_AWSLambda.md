# stream/streamconnection/TestAccStreamRSStreamConnection_AWSLambda Test Details
# Found 34 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-12 18:47](#error-2026-02-12t1847250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 10.02s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 42 seconds
- 2026-01-27 PASS 42 seconds
- 2026-01-28 PASS 43 seconds
- 2026-01-29 PASS 42 seconds
- 2026-01-30: MISSING
- 2026-01-31 PASS 41 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 55 seconds
- 2026-02-03
  - PASS 54 seconds
  - PASS 52 seconds
- 2026-02-04 PASS 47 seconds
- 2026-02-05 PASS 42 seconds
- 2026-02-06 PASS 46 seconds
- 2026-02-07
  - PASS 45 seconds
  - PASS 40 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 47 seconds
- 2026-02-10 PASS 42 seconds
- 2026-02-11 PASS 48 seconds
- 2026-02-12
  - PASS 41 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:25+00:00
```
2026-02-12T18:47:25.6619103Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2026-02-12T18:47:25.6620179Z     resource_stream_connection_test.go:477: Creating execution project (1): test-acc-tf-p-1870583441729704227
2026-02-12T18:47:25.6621121Z     resource_stream_connection_test.go:477: 
2026-02-12T18:47:25.6622633Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:25.6625630Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:25.6628715Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:25.6631655Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:25.6635022Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:477
2026-02-12T18:47:25.6637096Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-12T18:47:25.6638083Z         	Error:      	Received unexpected error:
2026-02-12T18:47:25.6642633Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6644928Z         	Test:       	TestAccStreamRSStreamConnection_AWSLambda
2026-02-12T18:47:25.6648910Z         	Messages:   	Project creation failed: test-acc-tf-p-1870583441729704227, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6651437Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (0.24s)
```

- 2026-02-13 PASS 46 seconds
- 2026-02-14 PASS 41 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 43 seconds
- 2026-02-17 PASS 41 seconds
- 2026-02-18 PASS 42 seconds
- 2026-02-19 PASS 40 seconds
- 2026-02-20 PASS 47 seconds
- 2026-02-21 PASS 42 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 46 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2030568Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2026-02-24T01:09:13.2035384Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2026-02-24T01:09:13.2207868Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2026-02-24T01:09:13.2208517Z     resource_stream_connection_test.go:481: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:09:13.2208965Z         
2026-02-24T01:09:13.2209705Z         Error: error creating cloud provider access (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:09:13.2210271Z         
2026-02-24T01:09:13.2210697Z           with mongodbatlas_cloud_provider_access_setup.setup_only,
2026-02-24T01:09:13.2211744Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_cloud_provider_access_setup" "setup_only":
2026-02-24T01:09:13.2212545Z           39: 		resource "mongodbatlas_cloud_provider_access_setup" "setup_only" {
2026-02-24T01:09:13.2212936Z         
2026-02-24T01:09:13.2213245Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (10.17s)
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
- 2026-02-01 PASS 43 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 47 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 45 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 43 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 42 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 47 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
