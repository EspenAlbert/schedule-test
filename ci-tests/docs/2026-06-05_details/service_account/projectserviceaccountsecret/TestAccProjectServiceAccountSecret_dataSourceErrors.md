# service_account/projectserviceaccountsecret/TestAccProjectServiceAccountSecret_dataSourceErrors Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:58](#error-2026-05-09t0058510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.07s
[2026-05-30 01:03](#error-2026-05-30t0103360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 3 seconds
- 2026-05-08 PASS 2 seconds
- 2026-05-09

### Error 2026-05-09T00:58:51+00:00
```
2026-05-09T00:58:51.4161499Z === RUN   TestAccProjectServiceAccountSecret_dataSourceErrors
2026-05-09T00:58:51.4162108Z     resource_test.go:103: Creating execution project (1): test-acc-tf-p-427292301950122115
2026-05-09T00:58:51.4162589Z     resource_test.go:103: 
2026-05-09T00:58:51.4163466Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T00:58:51.4165180Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T00:58:51.4167203Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T00:58:51.4169143Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccountsecret/resource_test.go:103
2026-05-09T00:58:51.4170008Z         	Error:      	Received unexpected error:
2026-05-09T00:58:51.4171897Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:58:51.4173120Z         	Test:       	TestAccProjectServiceAccountSecret_dataSourceErrors
2026-05-09T00:58:51.4174847Z         	Messages:   	Project creation failed: test-acc-tf-p-427292301950122115, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:58:51.4176206Z --- FAIL: TestAccProjectServiceAccountSecret_dataSourceErrors (79.71s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 2 seconds
- 2026-05-12 PASS 3 seconds
- 2026-05-13 PASS 4 seconds
- 2026-05-14 PASS 3 seconds
- 2026-05-15 PASS 2 seconds
- 2026-05-16 PASS 4 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 3 seconds
- 2026-05-19 PASS 3 seconds
- 2026-05-20 PASS 2 seconds
- 2026-05-21 PASS 48 seconds
- 2026-05-22 PASS 3 seconds
- 2026-05-23 PASS 4 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 2 seconds
- 2026-05-26 PASS 6 seconds
- 2026-05-27 PASS 2 seconds
- 2026-05-28 PASS 2 seconds
- 2026-05-29 PASS 2 seconds
- 2026-05-30

### Error 2026-05-30T01:03:36+00:00
```
2026-05-30T01:03:36.9260571Z === RUN   TestAccProjectServiceAccountSecret_dataSourceErrors
2026-05-30T01:03:36.9261653Z     resource_test.go:103: Creating execution project (1): test-acc-tf-p-9180354638241681553
2026-05-30T01:03:36.9262448Z     resource_test.go:103: 
2026-05-30T01:03:36.9263377Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:03:36.9266568Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:03:36.9269017Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:03:36.9271081Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccountsecret/resource_test.go:103
2026-05-30T01:03:36.9271966Z         	Error:      	Received unexpected error:
2026-05-30T01:03:36.9274162Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:03:36.9275532Z         	Test:       	TestAccProjectServiceAccountSecret_dataSourceErrors
2026-05-30T01:03:36.9277326Z         	Messages:   	Project creation failed: test-acc-tf-p-9180354638241681553, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:03:36.9278529Z --- FAIL: TestAccProjectServiceAccountSecret_dataSourceErrors (76.33s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 2 seconds
- 2026-06-02 PASS 3 seconds
- 2026-06-03 PASS 2 seconds
- 2026-06-04 PASS 2 seconds
- 2026-06-05 PASS 3 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 2 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 2 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 2 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 2 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
