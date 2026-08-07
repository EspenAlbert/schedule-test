# generic/x509authenticationdatabaseuser/TestAccGenericX509AuthDBUser_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:47](#error-2026-07-11t0047430000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 92.08s
[2026-07-21 00:48](#error-2026-07-21t0048140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.02s
[2026-07-23 00:48](#error-2026-07-23t0048220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS a minute
- 2026-07-10 PASS 5 seconds
- 2026-07-11

### Error 2026-07-11T00:47:43+00:00
```
2026-07-11T00:47:43.5236074Z === RUN   TestAccGenericX509AuthDBUser_basic
2026-07-11T00:47:43.5239227Z     resource_x509_authentication_database_user_test.go:24: Creating execution project (1): test-acc-tf-p-8060840077991891903
2026-07-11T00:47:43.5240575Z     resource_x509_authentication_database_user_test.go:24: 
2026-07-11T00:47:43.5242453Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:47:43.5245646Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:47:43.5249008Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:47:43.5253120Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/x509authenticationdatabaseuser/resource_x509_authentication_database_user_test.go:24
2026-07-11T00:47:43.5254910Z         	Error:      	Received unexpected error:
2026-07-11T00:47:43.5258607Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:47:43.5260537Z         	Test:       	TestAccGenericX509AuthDBUser_basic
2026-07-11T00:47:43.5264175Z         	Messages:   	Project creation failed: test-acc-tf-p-8060840077991891903, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:47:43.5266235Z --- FAIL: TestAccGenericX509AuthDBUser_basic (92.79s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 5 seconds
- 2026-07-14 PASS 13 seconds
- 2026-07-15 PASS 5 seconds
- 2026-07-16 PASS 14 seconds
- 2026-07-17 PASS 5 seconds
- 2026-07-18 PASS 11 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:48:14+00:00
```
2026-07-21T00:48:14.5694624Z === RUN   TestAccGenericX509AuthDBUser_basic
2026-07-21T00:48:14.5696108Z     resource_x509_authentication_database_user_test.go:24: Creating execution project (1): test-acc-tf-p-4682533598992863300
2026-07-21T00:48:14.5697351Z     resource_x509_authentication_database_user_test.go:24: 
2026-07-21T00:48:14.5698936Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:48:14.5700955Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:48:14.5702660Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:48:14.5704808Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/x509authenticationdatabaseuser/resource_x509_authentication_database_user_test.go:24
2026-07-21T00:48:14.5705779Z         	Error:      	Received unexpected error:
2026-07-21T00:48:14.5707914Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:48:14.5708999Z         	Test:       	TestAccGenericX509AuthDBUser_basic
2026-07-21T00:48:14.5710738Z         	Messages:   	Project creation failed: test-acc-tf-p-4682533598992863300, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:48:14.5713870Z --- FAIL: TestAccGenericX509AuthDBUser_basic (66.19s)
```

- 2026-07-22 PASS 7 seconds
- 2026-07-23

### Error 2026-07-23T00:48:22+00:00
```
2026-07-23T00:48:22.2374649Z === RUN   TestAccGenericX509AuthDBUser_basic
2026-07-23T00:48:22.2376978Z     resource_x509_authentication_database_user_test.go:24: Creating execution project (1): test-acc-tf-p-6113837737095980073
2026-07-23T00:48:22.2378601Z     resource_x509_authentication_database_user_test.go:24: 
2026-07-23T00:48:22.2381347Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:22.2383778Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:22.2385745Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:22.2388217Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/x509authenticationdatabaseuser/resource_x509_authentication_database_user_test.go:24
2026-07-23T00:48:22.2389342Z         	Error:      	Received unexpected error:
2026-07-23T00:48:22.2392151Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:22.2393467Z         	Test:       	TestAccGenericX509AuthDBUser_basic
2026-07-23T00:48:22.2395391Z         	Messages:   	Project creation failed: test-acc-tf-p-6113837737095980073, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:22.2396738Z --- FAIL: TestAccGenericX509AuthDBUser_basic (61.79s)
```

- 2026-07-24 PASS 4 seconds
- 2026-07-25 PASS 8 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 5 seconds
- 2026-07-28 PASS 7 seconds
- 2026-07-29 PASS 5 seconds
- 2026-07-30 PASS 6 seconds
- 2026-07-31 PASS 5 seconds
- 2026-08-01 PASS 7 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 6 seconds
- 2026-08-04 PASS 6 seconds
- 2026-08-05 PASS 5 seconds
- 2026-08-06 PASS 6 seconds
- 2026-08-07 PASS 5 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 6 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 4 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 6 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 6 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 6 seconds
  - PASS 5 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 4 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
