# generic/x509authenticationdatabaseuser/TestAccGenericX509AuthDBUser_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:41](#error-2026-04-09t0041470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 13 seconds
- 2026-04-08 PASS 6 seconds
- 2026-04-09

### Error 2026-04-09T00:41:47+00:00
```
2026-04-09T00:41:47.2487103Z === RUN   TestAccGenericX509AuthDBUser_basic
2026-04-09T00:41:47.2490416Z     resource_x509_authentication_database_user_test.go:24: Creating execution project (1): test-acc-tf-p-2510818679604945106
2026-04-09T00:41:47.2491808Z     resource_x509_authentication_database_user_test.go:24: 
2026-04-09T00:41:47.2493723Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:41:47.2497458Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:41:47.2501481Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T00:41:47.2505831Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/x509authenticationdatabaseuser/resource_x509_authentication_database_user_test.go:24
2026-04-09T00:41:47.2508034Z         	Error:      	Received unexpected error:
2026-04-09T00:41:47.2511628Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:41:47.2513652Z         	Test:       	TestAccGenericX509AuthDBUser_basic
2026-04-09T00:41:47.2517122Z         	Messages:   	Project creation failed: test-acc-tf-p-2510818679604945106, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:41:47.2519338Z --- FAIL: TestAccGenericX509AuthDBUser_basic (68.58s)
```

- 2026-04-10 PASS 6 seconds
- 2026-04-11 PASS a minute
- 2026-04-12: MISSING
- 2026-04-13 PASS 4 seconds
- 2026-04-14 PASS 11 seconds
- 2026-04-15 PASS 7 seconds
- 2026-04-16 PASS 10 seconds
- 2026-04-17 PASS 4 seconds
- 2026-04-18 PASS 54 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 5 seconds
- 2026-04-21 PASS 10 seconds
- 2026-04-22
  - PASS 5 seconds
  - PASS 7 seconds
- 2026-04-23 PASS 11 seconds
- 2026-04-24 PASS 7 seconds
- 2026-04-25 PASS 13 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 6 seconds
- 2026-04-28 PASS 21 seconds
- 2026-04-29 PASS 6 seconds
- 2026-04-30 PASS 10 seconds
- 2026-05-01 PASS 6 seconds
- 2026-05-02 PASS 9 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 6 seconds
- 2026-05-05 PASS 56 seconds
- 2026-05-06 PASS 6 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 6 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 4 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 4 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 4 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 5 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS 3 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 4 seconds
