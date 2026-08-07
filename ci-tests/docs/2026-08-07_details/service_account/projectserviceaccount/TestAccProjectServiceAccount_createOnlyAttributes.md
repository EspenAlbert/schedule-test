# service_account/projectserviceaccount/TestAccProjectServiceAccount_createOnlyAttributes Test Details
# Found 33 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:51](#error-2026-07-09t0051380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.09s
[2026-07-11 00:45](#error-2026-07-11t0045220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.04s
[2026-07-21 00:47](#error-2026-07-21t0047260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 99.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:51:38+00:00
```
2026-07-09T00:51:38.7910787Z === RUN   TestAccProjectServiceAccount_createOnlyAttributes
2026-07-09T00:51:38.7911512Z     resource_test.go:59: Creating execution project (1): test-acc-tf-p-6887966803817803719
2026-07-09T00:51:38.7912016Z     resource_test.go:59: 
2026-07-09T00:51:38.7912972Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:51:38.7914879Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:51:38.7916780Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:51:38.7918849Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccount/resource_test.go:59
2026-07-09T00:51:38.7919713Z         	Error:      	Received unexpected error:
2026-07-09T00:51:38.7922009Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:51:38.7923169Z         	Test:       	TestAccProjectServiceAccount_createOnlyAttributes
2026-07-09T00:51:38.7925065Z         	Messages:   	Project creation failed: test-acc-tf-p-6887966803817803719, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:51:38.7926557Z --- FAIL: TestAccProjectServiceAccount_createOnlyAttributes (89.90s)
```

- 2026-07-10 PASS 3 seconds
- 2026-07-11

### Error 2026-07-11T00:45:22+00:00
```
2026-07-11T00:45:22.6565721Z === RUN   TestAccProjectServiceAccount_createOnlyAttributes
2026-07-11T00:45:22.6566334Z     resource_test.go:59: Creating execution project (1): test-acc-tf-p-648221621486383432
2026-07-11T00:45:22.6566811Z     resource_test.go:59: 
2026-07-11T00:45:22.6567714Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:45:22.6569503Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:45:22.6571609Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:45:22.6573556Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccount/resource_test.go:59
2026-07-11T00:45:22.6574391Z         	Error:      	Received unexpected error:
2026-07-11T00:45:22.6576303Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:22.6577403Z         	Test:       	TestAccProjectServiceAccount_createOnlyAttributes
2026-07-11T00:45:22.6580412Z         	Messages:   	Project creation failed: test-acc-tf-p-648221621486383432, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:22.6581940Z --- FAIL: TestAccProjectServiceAccount_createOnlyAttributes (73.44s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 3 seconds
- 2026-07-14 PASS 7 seconds
- 2026-07-15 PASS 5 seconds
- 2026-07-16 PASS 4 seconds
- 2026-07-17 PASS 4 seconds
- 2026-07-18 PASS 6 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:47:26+00:00
```
2026-07-21T00:47:26.1324118Z === RUN   TestAccProjectServiceAccount_createOnlyAttributes
2026-07-21T00:47:26.1324730Z     resource_test.go:59: Creating execution project (1): test-acc-tf-p-8554345238302426018
2026-07-21T00:47:26.1325210Z     resource_test.go:59: 
2026-07-21T00:47:26.1326110Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:47:26.1327898Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:47:26.1329812Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:47:26.1331771Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccount/resource_test.go:59
2026-07-21T00:47:26.1332628Z         	Error:      	Received unexpected error:
2026-07-21T00:47:26.1334595Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:26.1335690Z         	Test:       	TestAccProjectServiceAccount_createOnlyAttributes
2026-07-21T00:47:26.1337484Z         	Messages:   	Project creation failed: test-acc-tf-p-8554345238302426018, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:26.1338782Z --- FAIL: TestAccProjectServiceAccount_createOnlyAttributes (99.11s)
```

- 2026-07-22 PASS 4 seconds
- 2026-07-23 PASS 17 seconds
- 2026-07-24 PASS 3 seconds
- 2026-07-25 PASS 3 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 3 seconds
- 2026-07-28 PASS 3 seconds
- 2026-07-29
  - PASS 4 seconds
  - PASS 2 seconds
- 2026-07-30 PASS 2 seconds
- 2026-07-31 PASS 3 seconds
- 2026-08-01 PASS 3 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 3 seconds
- 2026-08-04 PASS 3 seconds
- 2026-08-05 PASS 4 seconds
- 2026-08-06 PASS 3 seconds
- 2026-08-07 PASS 4 seconds

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
- 2026-07-19 PASS 3 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 3 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 2 seconds
  - PASS 3 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
