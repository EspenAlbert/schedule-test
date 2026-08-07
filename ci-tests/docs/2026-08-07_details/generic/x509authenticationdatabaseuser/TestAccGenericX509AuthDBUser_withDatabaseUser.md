# generic/x509authenticationdatabaseuser/TestAccGenericX509AuthDBUser_withDatabaseUser Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:47](#error-2026-07-11t0047430000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s
[2026-07-21 00:48](#error-2026-07-21t0048140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.04s
[2026-07-23 00:48](#error-2026-07-23t0048220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 11 seconds
- 2026-07-10 PASS 6 seconds
- 2026-07-11

### Error 2026-07-11T00:47:43+00:00
```
2026-07-11T00:47:43.5269133Z === RUN   TestAccGenericX509AuthDBUser_withDatabaseUser
2026-07-11T00:47:43.5270536Z     resource_x509_authentication_database_user_test.go:88: Creating execution project (1): test-acc-tf-p-8188911740091685738
2026-07-11T00:47:43.5272057Z     resource_x509_authentication_database_user_test.go:88: 
2026-07-11T00:47:43.5273866Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:47:43.5277333Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:47:43.5280556Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:47:43.5284731Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/x509authenticationdatabaseuser/resource_x509_authentication_database_user_test.go:88
2026-07-11T00:47:43.5286670Z         	Error:      	Received unexpected error:
2026-07-11T00:47:43.5290145Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:47:43.5292076Z         	Test:       	TestAccGenericX509AuthDBUser_withDatabaseUser
2026-07-11T00:47:43.5295227Z         	Messages:   	Project creation failed: test-acc-tf-p-8188911740091685738, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:47:43.5297512Z --- FAIL: TestAccGenericX509AuthDBUser_withDatabaseUser (62.15s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 5 seconds
- 2026-07-14 PASS 8 seconds
- 2026-07-15 PASS 4 seconds
- 2026-07-16 PASS 7 seconds
- 2026-07-17 PASS 4 seconds
- 2026-07-18 PASS 7 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:48:14+00:00
```
2026-07-21T00:48:14.5715385Z === RUN   TestAccGenericX509AuthDBUser_withDatabaseUser
2026-07-21T00:48:14.5716201Z     resource_x509_authentication_database_user_test.go:88: Creating execution project (1): test-acc-tf-p-6872979609938576238
2026-07-21T00:48:14.5717102Z     resource_x509_authentication_database_user_test.go:88: 
2026-07-21T00:48:14.5718098Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:48:14.5719810Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:48:14.5721476Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:48:14.5723601Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/x509authenticationdatabaseuser/resource_x509_authentication_database_user_test.go:88
2026-07-21T00:48:14.5724566Z         	Error:      	Received unexpected error:
2026-07-21T00:48:14.5726792Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:48:14.5727880Z         	Test:       	TestAccGenericX509AuthDBUser_withDatabaseUser
2026-07-21T00:48:14.5729589Z         	Messages:   	Project creation failed: test-acc-tf-p-6872979609938576238, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:48:14.5730799Z --- FAIL: TestAccGenericX509AuthDBUser_withDatabaseUser (76.36s)
```

- 2026-07-22 PASS 6 seconds
- 2026-07-23

### Error 2026-07-23T00:48:22+00:00
```
2026-07-23T00:48:22.2398233Z === RUN   TestAccGenericX509AuthDBUser_withDatabaseUser
2026-07-23T00:48:22.2399132Z     resource_x509_authentication_database_user_test.go:88: Creating execution project (1): test-acc-tf-p-7887883154759659516
2026-07-23T00:48:22.2405673Z     resource_x509_authentication_database_user_test.go:88: 
2026-07-23T00:48:22.2406851Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:22.2408853Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:22.2412027Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:22.2414561Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/x509authenticationdatabaseuser/resource_x509_authentication_database_user_test.go:88
2026-07-23T00:48:22.2415689Z         	Error:      	Received unexpected error:
2026-07-23T00:48:22.2417978Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:22.2419215Z         	Test:       	TestAccGenericX509AuthDBUser_withDatabaseUser
2026-07-23T00:48:22.2421477Z         	Messages:   	Project creation failed: test-acc-tf-p-7887883154759659516, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:22.2424007Z --- FAIL: TestAccGenericX509AuthDBUser_withDatabaseUser (68.55s)
```

- 2026-07-24 PASS 4 seconds
- 2026-07-25 PASS 3 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 7 seconds
- 2026-07-28 PASS 5 seconds
- 2026-07-29 PASS 4 seconds
- 2026-07-30 PASS 3 seconds
- 2026-07-31 PASS 6 seconds
- 2026-08-01 PASS 3 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 5 seconds
- 2026-08-04 PASS 2 seconds
- 2026-08-05 PASS 7 seconds
- 2026-08-06 PASS 2 seconds
- 2026-08-07 PASS 4 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 5 seconds
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
- 2026-07-26 PASS 6 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 3 seconds
  - PASS 2 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 2 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
