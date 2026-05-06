# autogen_fast/logintegration/TestAccLogIntegration_basicS3 Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 5)
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:46](#error-2026-04-09t0046500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.09s
[2026-04-17 00:53](#error-2026-04-17t0053100000) |  | dev |  | 31.01s
[2026-04-18 00:51](#error-2026-04-18t0051240000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.00s
[2026-04-30 01:01](#error-2026-04-30t0101120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 115.09s
[2026-05-05 00:57](#error-2026-05-05t0057430000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS a minute
- 2026-04-08 PASS a minute
- 2026-04-09

### Error 2026-04-09T00:46:50+00:00
```
2026-04-09T00:46:50.3670024Z === RUN   TestAccLogIntegration_basicS3
2026-04-09T00:46:50.3671293Z     resource_test.go:72: Creating execution project (1): test-acc-tf-p-6028841760498955248
2026-04-09T00:46:50.3672199Z     resource_test.go:72: 
2026-04-09T00:46:50.3674072Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:46:50.3677610Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:46:50.3681036Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T00:46:50.3684737Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:72
2026-04-09T00:46:50.3686908Z         	Error:      	Received unexpected error:
2026-04-09T00:46:50.3690524Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:46:50.3692425Z         	Test:       	TestAccLogIntegration_basicS3
2026-04-09T00:46:50.3696107Z         	Messages:   	Project creation failed: test-acc-tf-p-6028841760498955248, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:46:50.3698216Z --- FAIL: TestAccLogIntegration_basicS3 (78.92s)
```

- 2026-04-10 PASS a minute
- 2026-04-11 PASS 2 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS a minute
- 2026-04-14 PASS a minute
- 2026-04-15 PASS a minute
- 2026-04-16 PASS 2 minutes
- 2026-04-17

### Error 2026-04-17T00:53:10+00:00
```
2026-04-17T00:53:10.0177374Z === RUN   TestAccLogIntegration_basicS3
2026-04-17T00:53:10.0178307Z     resource_test.go:72: Creating execution project (1): test-acc-tf-p-2084276322306633542
2026-04-17T00:53:10.0262451Z === CONT  TestAccLogIntegration_basicS3
2026-04-17T00:53:10.0283733Z === NAME  TestAccLogIntegration_basicS3
2026-04-17T00:53:10.0284293Z     resource_test.go:81: Step 1/4 error: Error running apply: exit status 1
2026-04-17T00:53:10.0284734Z         
2026-04-17T00:53:10.0285073Z         Error: Error calling API in Create
2026-04-17T00:53:10.0285397Z         
2026-04-17T00:53:10.0285790Z           with mongodbatlas_log_integration.test,
2026-04-17T00:53:10.0286536Z           on terraform_plugin_test.tf line 126, in resource "mongodbatlas_log_integration" "test":
2026-04-17T00:53:10.0287224Z          126: 		resource "mongodbatlas_log_integration" "test" {
2026-04-17T00:53:10.0287603Z         
2026-04-17T00:53:10.0288215Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e18386abf3dbd56b5daf66/logIntegrations
2026-04-17T00:53:10.0288835Z         POST: HTTP 400 Bad Request (Error code:
2026-04-17T00:53:10.0289562Z         "CLOUD_PROVIDER_ACCESS_ROLE_NOT_AUTHORIZED") Detail: The specified Cloud
2026-04-17T00:53:10.0290262Z         Provider Access role (69e183986dfdaa5fce05fc43) has not been authorized.
2026-04-17T00:53:10.0290968Z         Reason: Bad Request. Params: [69e183986dfdaa5fce05fc43], BadRequestDetail: 
2026-04-17T00:53:10.0291465Z --- FAIL: TestAccLogIntegration_basicS3 (31.12s)
```

- 2026-04-18

### Error 2026-04-18T00:51:24+00:00
```
2026-04-18T00:51:24.5879687Z === RUN   TestAccLogIntegration_basicS3
2026-04-18T00:51:24.5880828Z     resource_test.go:72: Creating execution project (1): test-acc-tf-p-1770971801556973093
2026-04-18T00:51:24.5881704Z     resource_test.go:72: 
2026-04-18T00:51:24.5883725Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-18T00:51:24.5889138Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-18T00:51:24.5892360Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-18T00:51:24.5895692Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:72
2026-04-18T00:51:24.5897361Z         	Error:      	Received unexpected error:
2026-04-18T00:51:24.5900839Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:51:24.5902605Z         	Test:       	TestAccLogIntegration_basicS3
2026-04-18T00:51:24.5905652Z         	Messages:   	Project creation failed: test-acc-tf-p-1770971801556973093, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:51:24.5907795Z --- FAIL: TestAccLogIntegration_basicS3 (82.04s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS a minute
- 2026-04-21 PASS a minute
- 2026-04-22 PASS a minute
- 2026-04-23 PASS 2 minutes
- 2026-04-24 PASS a minute
- 2026-04-25 PASS 2 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS a minute
- 2026-04-28 PASS a minute
- 2026-04-29 PASS a minute
- 2026-04-30

### Error 2026-04-30T01:01:12+00:00
```
2026-04-30T01:01:12.3427644Z === RUN   TestAccLogIntegration_basicS3
2026-04-30T01:01:12.3428675Z     resource_test.go:72: Creating execution project (1): test-acc-tf-p-5638980567241328398
2026-04-30T01:01:12.3432220Z     resource_test.go:72: 
2026-04-30T01:01:12.3433263Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:01:12.3435061Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:01:12.3436753Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:01:12.3438510Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:72
2026-04-30T01:01:12.3439300Z         	Error:      	Received unexpected error:
2026-04-30T01:01:12.3441312Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:12.3442355Z         	Test:       	TestAccLogIntegration_basicS3
2026-04-30T01:01:12.3444042Z         	Messages:   	Project creation failed: test-acc-tf-p-5638980567241328398, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:12.3445227Z --- FAIL: TestAccLogIntegration_basicS3 (115.95s)
```

- 2026-05-01 PASS a minute
- 2026-05-02 PASS 2 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS a minute
- 2026-05-05

### Error 2026-05-05T00:57:43+00:00
```
2026-05-05T00:57:43.1787625Z === RUN   TestAccLogIntegration_basicS3
2026-05-05T00:57:43.1789065Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-8297017928936095914
2026-05-05T00:57:43.1790421Z     resource_test.go:73: 
2026-05-05T00:57:43.1792237Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:57:43.1798188Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T00:57:43.1801496Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T00:57:43.1804978Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:73
2026-05-05T00:57:43.1806742Z         	Error:      	Received unexpected error:
2026-05-05T00:57:43.1810286Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:57:43.1812146Z         	Test:       	TestAccLogIntegration_basicS3
2026-05-05T00:57:43.1815280Z         	Messages:   	Project creation failed: test-acc-tf-p-8297017928936095914, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:57:43.1817513Z --- FAIL: TestAccLogIntegration_basicS3 (68.51s)
```

- 2026-05-06 PASS a minute

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS a minute
  - PASS a minute
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS a minute
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS a minute
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS a minute
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS a minute
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS a minute
- 2026-05-04 PASS a minute
- 2026-05-05: MISSING
- 2026-05-06 PASS a minute
