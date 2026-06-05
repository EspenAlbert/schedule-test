# generic/x509authenticationdatabaseuser/TestAccGenericX509AuthDBUser_withDatabaseUser Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 3)
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:58](#error-2026-05-09t0058530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s
[2026-05-23 01:02](#error-2026-05-23t0102390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.08s
[2026-06-02 01:24](#error-2026-06-02t0124190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 6 seconds
- 2026-05-08 PASS 4 seconds
- 2026-05-09

### Error 2026-05-09T00:58:53+00:00
```
2026-05-09T00:58:53.2279530Z === RUN   TestAccGenericX509AuthDBUser_withDatabaseUser
2026-05-09T00:58:53.2280408Z     resource_x509_authentication_database_user_test.go:88: Creating execution project (1): test-acc-tf-p-5629700974016287591
2026-05-09T00:58:53.2281234Z     resource_x509_authentication_database_user_test.go:88: 
2026-05-09T00:58:53.2282376Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T00:58:53.2284396Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T00:58:53.2286635Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T00:58:53.2289491Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/x509authenticationdatabaseuser/resource_x509_authentication_database_user_test.go:88
2026-05-09T00:58:53.2290652Z         	Error:      	Received unexpected error:
2026-05-09T00:58:53.2292817Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:58:53.2294085Z         	Test:       	TestAccGenericX509AuthDBUser_withDatabaseUser
2026-05-09T00:58:53.2296317Z         	Messages:   	Project creation failed: test-acc-tf-p-5629700974016287591, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:58:53.2297787Z --- FAIL: TestAccGenericX509AuthDBUser_withDatabaseUser (62.22s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 4 seconds
- 2026-05-12 PASS 6 seconds
- 2026-05-13 PASS 7 seconds
- 2026-05-14 PASS 5 seconds
- 2026-05-15 PASS 5 seconds
- 2026-05-16 PASS 6 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 4 seconds
- 2026-05-19 PASS 6 seconds
- 2026-05-20 PASS 5 seconds
- 2026-05-21 PASS 5 seconds
- 2026-05-22 PASS 5 seconds
- 2026-05-23

### Error 2026-05-23T01:02:39+00:00
```
2026-05-23T01:02:39.2279542Z === RUN   TestAccGenericX509AuthDBUser_withDatabaseUser
2026-05-23T01:02:39.2280399Z     resource_x509_authentication_database_user_test.go:88: Creating execution project (1): test-acc-tf-p-5714298960814329148
2026-05-23T01:02:39.2281202Z     resource_x509_authentication_database_user_test.go:88: 
2026-05-23T01:02:39.2282672Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:02:39.2284675Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:02:39.2286594Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:02:39.2289015Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/x509authenticationdatabaseuser/resource_x509_authentication_database_user_test.go:88
2026-05-23T01:02:39.2290111Z         	Error:      	Received unexpected error:
2026-05-23T01:02:39.2292166Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:39.2293659Z         	Test:       	TestAccGenericX509AuthDBUser_withDatabaseUser
2026-05-23T01:02:39.2295593Z         	Messages:   	Project creation failed: test-acc-tf-p-5714298960814329148, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:39.2296939Z --- FAIL: TestAccGenericX509AuthDBUser_withDatabaseUser (79.79s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 4 seconds
- 2026-05-26 PASS 8 seconds
- 2026-05-27 PASS 4 seconds
- 2026-05-28 PASS 6 seconds
- 2026-05-29 PASS 5 seconds
- 2026-05-30 PASS 5 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 5 seconds
- 2026-06-02

### Error 2026-06-02T01:24:19+00:00
```
2026-06-02T01:24:19.0723373Z === RUN   TestAccGenericX509AuthDBUser_withDatabaseUser
2026-06-02T01:24:19.0724317Z     resource_x509_authentication_database_user_test.go:88: Creating execution project (1): test-acc-tf-p-4422645050298569485
2026-06-02T01:24:19.0725484Z     resource_x509_authentication_database_user_test.go:88: 
2026-06-02T01:24:19.0726697Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:24:19.0728646Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:24:19.0730553Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:24:19.0732983Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/x509authenticationdatabaseuser/resource_x509_authentication_database_user_test.go:88
2026-06-02T01:24:19.0734079Z         	Error:      	Received unexpected error:
2026-06-02T01:24:19.0736370Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:24:19.0737760Z         	Test:       	TestAccGenericX509AuthDBUser_withDatabaseUser
2026-06-02T01:24:19.0739673Z         	Messages:   	Project creation failed: test-acc-tf-p-4422645050298569485, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:24:19.0741023Z --- FAIL: TestAccGenericX509AuthDBUser_withDatabaseUser (64.87s)
```

- 2026-06-03 PASS 4 seconds
- 2026-06-04 PASS 5 seconds
- 2026-06-05 PASS 4 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 4 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 3 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 5 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 6 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
