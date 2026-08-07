# generic/auditing/TestAccGenericAuditing_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:50](#error-2026-07-09t0050020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s
[2026-07-11 00:44](#error-2026-07-11t0044340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.04s
[2026-07-21 00:45](#error-2026-07-21t0045110000) |  | dev | flaky_500 | 32.05s
[2026-07-23 00:46](#error-2026-07-23t0046100000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:50:02+00:00
```
2026-07-09T00:50:02.2032907Z === RUN   TestAccGenericAuditing_basic
2026-07-09T00:50:02.2036484Z     resource_auditing_test.go:30: Creating execution project (1): test-acc-tf-p-5182751780669394243
2026-07-09T00:50:02.2037213Z     resource_auditing_test.go:30: 
2026-07-09T00:50:02.2038609Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:50:02.2040618Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:50:02.2042580Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:50:02.2045010Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/auditing/resource_auditing_test.go:30
2026-07-09T00:50:02.2045973Z         	Error:      	Received unexpected error:
2026-07-09T00:50:02.2048082Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:50:02.2049276Z         	Test:       	TestAccGenericAuditing_basic
2026-07-09T00:50:02.2051199Z         	Messages:   	Project creation failed: test-acc-tf-p-5182751780669394243, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:50:02.2052524Z --- FAIL: TestAccGenericAuditing_basic (62.05s)
```

- 2026-07-10 PASS 5 seconds
- 2026-07-11

### Error 2026-07-11T00:44:34+00:00
```
2026-07-11T00:44:34.8564115Z === RUN   TestAccGenericAuditing_basic
2026-07-11T00:44:34.8567243Z     resource_auditing_test.go:30: Creating execution project (1): test-acc-tf-p-2213615622377452278
2026-07-11T00:44:34.8567952Z     resource_auditing_test.go:30: 
2026-07-11T00:44:34.8569376Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:44:34.8571373Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:44:34.8573304Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:44:34.8575309Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/auditing/resource_auditing_test.go:30
2026-07-11T00:44:34.8576257Z         	Error:      	Received unexpected error:
2026-07-11T00:44:34.8578634Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:34.8579816Z         	Test:       	TestAccGenericAuditing_basic
2026-07-11T00:44:34.8581701Z         	Messages:   	Project creation failed: test-acc-tf-p-2213615622377452278, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:34.8582947Z --- FAIL: TestAccGenericAuditing_basic (73.44s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 4 seconds
- 2026-07-14 PASS 11 seconds
- 2026-07-15 PASS 5 seconds
- 2026-07-16 PASS a minute
- 2026-07-17 PASS 4 seconds
- 2026-07-18 PASS 12 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:45:11+00:00
```
2026-07-21T00:45:11.6563914Z === RUN   TestAccGenericAuditing_basic
2026-07-21T00:45:11.6565221Z     resource_auditing_test.go:30: Creating execution project (1): test-acc-tf-p-6244307589676610474
2026-07-21T00:45:11.6567511Z     resource_auditing_test.go:30: 
2026-07-21T00:45:11.6569093Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:45:11.6571401Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:45:11.6573903Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:45:11.6576782Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/auditing/resource_auditing_test.go:30
2026-07-21T00:45:11.6577686Z         	Error:      	Received unexpected error:
2026-07-21T00:45:11.6578672Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-21T00:45:11.6579349Z         	Test:       	TestAccGenericAuditing_basic
2026-07-21T00:45:11.6580447Z         	Messages:   	Project creation failed: test-acc-tf-p-6244307589676610474, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-21T00:45:11.6581254Z --- FAIL: TestAccGenericAuditing_basic (32.48s)
```

- 2026-07-22 PASS 6 seconds
- 2026-07-23

### Error 2026-07-23T00:46:10+00:00
```
2026-07-23T00:46:10.6763213Z === RUN   TestAccGenericAuditing_basic
2026-07-23T00:46:10.6766610Z     resource_auditing_test.go:30: Creating execution project (1): test-acc-tf-p-4435346655072043364
2026-07-23T00:46:10.6767918Z     resource_auditing_test.go:30: 
2026-07-23T00:46:10.6770490Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:46:10.6774037Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:46:10.6777518Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:46:10.6781458Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/auditing/resource_auditing_test.go:30
2026-07-23T00:46:10.6783054Z         	Error:      	Received unexpected error:
2026-07-23T00:46:10.6786809Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:10.6788807Z         	Test:       	TestAccGenericAuditing_basic
2026-07-23T00:46:10.6792500Z         	Messages:   	Project creation failed: test-acc-tf-p-4435346655072043364, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:10.6794773Z --- FAIL: TestAccGenericAuditing_basic (61.51s)
```

- 2026-07-24 PASS 3 seconds
- 2026-07-25 PASS 6 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 4 seconds
- 2026-07-28 PASS 6 seconds
- 2026-07-29 PASS 5 seconds
- 2026-07-30 PASS 4 seconds
- 2026-07-31 PASS 5 seconds
- 2026-08-01 PASS 5 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 5 seconds
- 2026-08-04 PASS 5 seconds
- 2026-08-05 PASS 6 seconds
- 2026-08-06 PASS 6 seconds
- 2026-08-07 PASS 5 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 3 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 4 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 4 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 5 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 4 seconds
  - PASS 2 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
