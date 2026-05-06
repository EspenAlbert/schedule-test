# service_account/projectserviceaccount/TestAccProjectServiceAccount_createOnlyAttributes Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:44](#error-2026-04-11t0044360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.07s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 4 seconds
- 2026-04-08 PASS 3 seconds
- 2026-04-09 PASS 16 seconds
- 2026-04-10 PASS 3 seconds
- 2026-04-11

### Error 2026-04-11T00:44:36+00:00
```
2026-04-11T00:44:36.4345581Z === RUN   TestAccProjectServiceAccount_createOnlyAttributes
2026-04-11T00:44:36.4346199Z     resource_test.go:60: Creating execution project (1): test-acc-tf-p-7959241762486907914
2026-04-11T00:44:36.4346675Z     resource_test.go:60: 
2026-04-11T00:44:36.4347590Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:44:36.4349407Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:44:36.4351221Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:44:36.4353204Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccount/resource_test.go:60
2026-04-11T00:44:36.4354489Z         	Error:      	Received unexpected error:
2026-04-11T00:44:36.4356448Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:44:36.4357557Z         	Test:       	TestAccProjectServiceAccount_createOnlyAttributes
2026-04-11T00:44:36.4359364Z         	Messages:   	Project creation failed: test-acc-tf-p-7959241762486907914, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:44:36.4360598Z --- FAIL: TestAccProjectServiceAccount_createOnlyAttributes (61.72s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 3 seconds
- 2026-04-14 PASS 5 seconds
- 2026-04-15 PASS 3 seconds
- 2026-04-16 PASS 4 seconds
- 2026-04-17 PASS 3 seconds
- 2026-04-18 PASS 3 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 3 seconds
- 2026-04-21 PASS 5 seconds
- 2026-04-22 PASS 4 seconds
- 2026-04-23 PASS 5 seconds
- 2026-04-24 PASS 3 seconds
- 2026-04-25 PASS 6 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 3 seconds
- 2026-04-28 PASS 4 seconds
- 2026-04-29 PASS 4 seconds
- 2026-04-30 PASS a minute
- 2026-05-01 PASS 3 seconds
- 2026-05-02 PASS 4 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 4 seconds
- 2026-05-05 PASS 5 seconds
- 2026-05-06 PASS 3 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 3 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 3 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 4 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 3 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 3 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 3 seconds
- 2026-05-04 PASS 3 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 3 seconds
