# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaSSL Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.04s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.09s
[2026-07-18 01:45](#error-2026-07-18t0145130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.04s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 104.08s
[2026-08-03 01:33](#error-2026-08-03t0133290000) |  | dev | flaky_client | 5.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.5946965Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-07-09T01:15:21.5947823Z     resource_stream_connection_test.go:259: Creating execution project (1): test-acc-tf-p-4474044349988751237
2026-07-09T01:15:21.5948582Z     resource_stream_connection_test.go:259: 
2026-07-09T01:15:21.5949784Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.5952065Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.5954384Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.5956818Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.5959453Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:259
2026-07-09T01:15:21.5961056Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:15:21.5961758Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.5964235Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.5965664Z         	Test:       	TestAccStreamRSStreamConnection_kafkaSSL
2026-07-09T01:15:21.5967896Z         	Messages:   	Project creation failed: test-acc-tf-p-4474044349988751237, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.5969410Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (64.40s)
```

- 2026-07-10 PASS 5 minutes
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7245669Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-07-11T01:30:51.7246921Z     resource_stream_connection_test.go:259: Creating execution project (1): test-acc-tf-p-7371411779293642893
2026-07-11T01:30:51.7248214Z     resource_stream_connection_test.go:259: 
2026-07-11T01:30:51.7250190Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7253657Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7257059Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7260672Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-11T01:30:51.7264589Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:259
2026-07-11T01:30:51.7266988Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T01:30:51.7267936Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7271779Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7273725Z         	Test:       	TestAccStreamRSStreamConnection_kafkaSSL
2026-07-11T01:30:51.7276990Z         	Messages:   	Project creation failed: test-acc-tf-p-7371411779293642893, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7279397Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (75.87s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 3 minutes
- 2026-07-14 PASS 2 minutes
- 2026-07-15 PASS 2 minutes
- 2026-07-16 PASS 5 minutes
- 2026-07-17 PASS 9 minutes
- 2026-07-18

### Error 2026-07-18T01:45:13+00:00
```
2026-07-18T01:45:13.0311186Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-07-18T01:45:13.0311897Z     resource_stream_connection_test.go:259: Creating execution project (1): test-acc-tf-p-8863418591535997970
2026-07-18T01:45:13.0312517Z     resource_stream_connection_test.go:259: 
2026-07-18T01:45:13.0313501Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:45:13.0315564Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:45:13.0317409Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:45:13.0319238Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-18T01:45:13.0321348Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:259
2026-07-18T01:45:13.0322657Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T01:45:13.0323197Z         	Error:      	Received unexpected error:
2026-07-18T01:45:13.0325379Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0326487Z         	Test:       	TestAccStreamRSStreamConnection_kafkaSSL
2026-07-18T01:45:13.0328298Z         	Messages:   	Project creation failed: test-acc-tf-p-8863418591535997970, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0329690Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (82.36s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3145906Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-07-21T00:59:13.3146632Z     resource_stream_connection_test.go:259: Creating execution project (1): test-acc-tf-p-4140523578910354566
2026-07-21T00:59:13.3147250Z     resource_stream_connection_test.go:259: 
2026-07-21T00:59:13.3148238Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3150092Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3151949Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3154059Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3156189Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:259
2026-07-21T00:59:13.3157518Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:59:13.3158066Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3160057Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3161179Z         	Test:       	TestAccStreamRSStreamConnection_kafkaSSL
2026-07-21T00:59:13.3163210Z         	Messages:   	Project creation failed: test-acc-tf-p-4140523578910354566, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3164465Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (104.75s)
```

- 2026-07-22 PASS 2 minutes
- 2026-07-23 PASS 2 minutes
- 2026-07-24 PASS 3 minutes
- 2026-07-25 PASS 2 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 minutes
- 2026-07-28 PASS 2 minutes
- 2026-07-29 PASS 5 minutes
- 2026-07-30 PASS 3 minutes
- 2026-07-31 PASS 3 minutes
- 2026-08-01 PASS 2 minutes
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:29+00:00
```
2026-08-03T01:33:29.9922463Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-08-03T01:33:29.9933953Z    test_name=TestAccStreamRSStreamConnection_kafkaSSL test_terraform_path=/home/runner/work/_temp/15c4ca8d-89c8-44b4-a2b6-45595e5990a6/terraform test_working_directory=/tmp/plugintest1551310339 test_step_number=1
2026-08-03T01:33:29.9935389Z     resource_stream_connection_test.go:268: Step 1/3 error: Error running apply: exit status 1
2026-08-03T01:33:29.9935876Z         
2026-08-03T01:33:29.9936192Z         Error: error creating resource
2026-08-03T01:33:29.9936500Z         
2026-08-03T01:33:29.9936879Z           with mongodbatlas_stream_connection.test,
2026-08-03T01:33:29.9937612Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-08-03T01:33:29.9938303Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-08-03T01:33:29.9938661Z         
2026-08-03T01:33:29.9939340Z         Post
2026-08-03T01:33:29.9940187Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe500aa9e3c145b665a3d/streams/test-acc-tf-s-8498845148385410232/connections":
2026-08-03T01:33:29.9940951Z         dial tcp 3.228.247.77:443: i/o timeout
2026-08-03T01:33:29.9941359Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (5.31s)
```

  - PASS 2 minutes
  - PASS 5 minutes
- 2026-08-04 PASS 2 minutes
- 2026-08-05 PASS 2 minutes
- 2026-08-06 PASS 2 minutes
- 2026-08-07 PASS 2 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 3 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 2 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 2 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 2 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 2 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
