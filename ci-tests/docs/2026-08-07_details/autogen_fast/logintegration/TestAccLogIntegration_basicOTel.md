# autogen_fast/logintegration/TestAccLogIntegration_basicOTel Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.08s
[2026-07-18 00:49](#error-2026-07-18t0049420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.04s
[2026-07-21 00:53](#error-2026-07-21t0053050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.07s
[2026-07-23 00:48](#error-2026-07-23t0048360000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:03+00:00
```
2026-07-09T00:57:03.9646162Z === RUN   TestAccLogIntegration_basicOTel
2026-07-09T00:57:03.9646804Z     resource_test.go:232: Creating execution project (1): test-acc-tf-p-7719395684692239073
2026-07-09T00:57:03.9647363Z     resource_test.go:232: 
2026-07-09T00:57:03.9648324Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:03.9650494Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:03.9652365Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:03.9654334Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:232
2026-07-09T00:57:03.9655199Z         	Error:      	Received unexpected error:
2026-07-09T00:57:03.9657208Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:03.9658302Z         	Test:       	TestAccLogIntegration_basicOTel
2026-07-09T00:57:03.9660346Z         	Messages:   	Project creation failed: test-acc-tf-p-7719395684692239073, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:03.9661605Z --- FAIL: TestAccLogIntegration_basicOTel (62.77s)
```

- 2026-07-10 PASS 7 seconds
- 2026-07-11 PASS a minute
- 2026-07-12: MISSING
- 2026-07-13 PASS 8 seconds
- 2026-07-14 PASS 8 seconds
- 2026-07-15 PASS 8 seconds
- 2026-07-16 PASS 7 seconds
- 2026-07-17 PASS 8 seconds
- 2026-07-18

### Error 2026-07-18T00:49:42+00:00
```
2026-07-18T00:49:42.9104806Z === RUN   TestAccLogIntegration_basicOTel
2026-07-18T00:49:42.9105720Z     resource_test.go:232: Creating execution project (1): test-acc-tf-p-7290316223394620533
2026-07-18T00:49:42.9106358Z     resource_test.go:232: 
2026-07-18T00:49:42.9107297Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:49:42.9109066Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:49:42.9110776Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:49:42.9112660Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:232
2026-07-18T00:49:42.9113607Z         	Error:      	Received unexpected error:
2026-07-18T00:49:42.9115667Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:42.9116925Z         	Test:       	TestAccLogIntegration_basicOTel
2026-07-18T00:49:42.9118685Z         	Messages:   	Project creation failed: test-acc-tf-p-7290316223394620533, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:42.9119852Z --- FAIL: TestAccLogIntegration_basicOTel (73.43s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:05+00:00
```
2026-07-21T00:53:05.9986233Z === RUN   TestAccLogIntegration_basicOTel
2026-07-21T00:53:05.9986890Z     resource_test.go:232: Creating execution project (1): test-acc-tf-p-2260211174281216883
2026-07-21T00:53:05.9987471Z     resource_test.go:232: 
2026-07-21T00:53:05.9988483Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:05.9990369Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:05.9992216Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:05.9994178Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:232
2026-07-21T00:53:05.9995244Z         	Error:      	Received unexpected error:
2026-07-21T00:53:05.9997491Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:05.9998574Z         	Test:       	TestAccLogIntegration_basicOTel
2026-07-21T00:53:06.0000402Z         	Messages:   	Project creation failed: test-acc-tf-p-2260211174281216883, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0001802Z --- FAIL: TestAccLogIntegration_basicOTel (61.68s)
```

- 2026-07-22 PASS 7 seconds
- 2026-07-23

### Error 2026-07-23T00:48:36+00:00
```
2026-07-23T00:48:36.9148035Z === RUN   TestAccLogIntegration_basicOTel
2026-07-23T00:48:36.9148532Z     resource_test.go:232: Creating execution project (1): test-acc-tf-p-3016071718519913393
2026-07-23T00:48:36.9148969Z     resource_test.go:232: 
2026-07-23T00:48:36.9149736Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:36.9151306Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:36.9152850Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:36.9154381Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:232
2026-07-23T00:48:36.9155068Z         	Error:      	Received unexpected error:
2026-07-23T00:48:36.9157414Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:36.9158544Z         	Test:       	TestAccLogIntegration_basicOTel
2026-07-23T00:48:36.9160395Z         	Messages:   	Project creation failed: test-acc-tf-p-3016071718519913393, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:36.9161622Z --- FAIL: TestAccLogIntegration_basicOTel (0.36s)
```

- 2026-07-24 PASS 7 seconds
- 2026-07-25 PASS 6 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 10 seconds
- 2026-07-28 PASS 7 seconds
- 2026-07-29 PASS 7 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31 PASS 6 seconds
- 2026-08-01 PASS 7 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 7 seconds
- 2026-08-04 PASS 6 seconds
- 2026-08-05 PASS 7 seconds
- 2026-08-06 PASS 7 seconds
- 2026-08-07 PASS 7 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 9 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 8 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 8 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 9 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 8 seconds
  - PASS 11 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 9 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
