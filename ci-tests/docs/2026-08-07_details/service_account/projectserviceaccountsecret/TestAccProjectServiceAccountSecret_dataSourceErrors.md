# service_account/projectserviceaccountsecret/TestAccProjectServiceAccountSecret_dataSourceErrors Test Details
# Found 33 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:52](#error-2026-07-09t0052190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.09s
[2026-07-14 00:44](#error-2026-07-14t0044260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:52:19+00:00
```
2026-07-09T00:52:19.5062696Z === RUN   TestAccProjectServiceAccountSecret_dataSourceErrors
2026-07-09T00:52:19.5063529Z     resource_test.go:103: Creating execution project (1): test-acc-tf-p-5735474859016431367
2026-07-09T00:52:19.5064037Z     resource_test.go:103: 
2026-07-09T00:52:19.5064975Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:52:19.5066847Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:52:19.5068828Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:52:19.5071166Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccountsecret/resource_test.go:103
2026-07-09T00:52:19.5072054Z         	Error:      	Received unexpected error:
2026-07-09T00:52:19.5074088Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:52:19.5075286Z         	Test:       	TestAccProjectServiceAccountSecret_dataSourceErrors
2026-07-09T00:52:19.5077190Z         	Messages:   	Project creation failed: test-acc-tf-p-5735474859016431367, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:52:19.5078480Z --- FAIL: TestAccProjectServiceAccountSecret_dataSourceErrors (71.91s)
```

- 2026-07-10 PASS 2 seconds
- 2026-07-11 PASS 3 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 2 seconds
- 2026-07-14

### Error 2026-07-14T00:44:26+00:00
```
2026-07-14T00:44:26.4461505Z === RUN   TestAccProjectServiceAccountSecret_dataSourceErrors
2026-07-14T00:44:26.4462792Z     resource_test.go:103: Creating execution project (1): test-acc-tf-p-2796961607357974585
2026-07-14T00:44:26.4463705Z     resource_test.go:103: 
2026-07-14T00:44:26.4465152Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T00:44:26.4467865Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-14T00:44:26.4469736Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-14T00:44:26.4472262Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccountsecret/resource_test.go:103
2026-07-14T00:44:26.4473313Z         	Error:      	Received unexpected error:
2026-07-14T00:44:26.4475281Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:44:26.4476425Z         	Test:       	TestAccProjectServiceAccountSecret_dataSourceErrors
2026-07-14T00:44:26.4478241Z         	Messages:   	Project creation failed: test-acc-tf-p-2796961607357974585, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:44:26.4479483Z --- FAIL: TestAccProjectServiceAccountSecret_dataSourceErrors (64.22s)
```

- 2026-07-15 PASS 3 seconds
- 2026-07-16 PASS 4 seconds
- 2026-07-17 PASS 3 seconds
- 2026-07-18 PASS 3 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 8 seconds
- 2026-07-22 PASS 2 seconds
- 2026-07-23 PASS 7 seconds
- 2026-07-24 PASS 2 seconds
- 2026-07-25 PASS 2 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 seconds
- 2026-07-28 PASS 2 seconds
- 2026-07-29
  - PASS 3 seconds
  - PASS 2 seconds
- 2026-07-30 PASS 2 seconds
- 2026-07-31 PASS 2 seconds
- 2026-08-01 PASS 2 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 2 seconds
- 2026-08-04 PASS 2 seconds
- 2026-08-05 PASS 2 seconds
- 2026-08-06 PASS 2 seconds
- 2026-08-07 PASS 2 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 2 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 3 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 2 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 2 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a second
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
