# service_account/projectserviceaccountsecret/TestAccProjectServiceAccountSecret_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 3)
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:58](#error-2026-05-09t0058510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.05s
[2026-05-21 01:05](#error-2026-05-21t0105540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.09s
[2026-05-30 01:03](#error-2026-05-30t0103360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.10s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 10 seconds
- 2026-05-08 PASS 6 seconds
- 2026-05-09

### Error 2026-05-09T00:58:51+00:00
```
2026-05-09T00:58:51.4103280Z === RUN   TestAccProjectServiceAccountSecret_basic
2026-05-09T00:58:51.4104244Z     resource_test.go:19: Creating execution project (1): test-acc-tf-p-8665775563030550880
2026-05-09T00:58:51.4104776Z     resource_test.go:19: 
2026-05-09T00:58:51.4107933Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T00:58:51.4110565Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T00:58:51.4113475Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T00:58:51.4116803Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccountsecret/resource_test.go:19
2026-05-09T00:58:51.4117832Z         	Error:      	Received unexpected error:
2026-05-09T00:58:51.4119738Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:58:51.4140727Z         	Test:       	TestAccProjectServiceAccountSecret_basic
2026-05-09T00:58:51.4143337Z         	Messages:   	Project creation failed: test-acc-tf-p-8665775563030550880, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:58:51.4145270Z --- FAIL: TestAccProjectServiceAccountSecret_basic (64.46s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 8 seconds
- 2026-05-12 PASS 11 seconds
- 2026-05-13 PASS 9 seconds
- 2026-05-14 PASS 14 seconds
- 2026-05-15 PASS 6 seconds
- 2026-05-16 PASS 15 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 7 seconds
- 2026-05-19 PASS 9 seconds
- 2026-05-20 PASS 7 seconds
- 2026-05-21

### Error 2026-05-21T01:05:54+00:00
```
2026-05-21T01:05:54.1248621Z === RUN   TestAccProjectServiceAccountSecret_basic
2026-05-21T01:05:54.1250315Z     resource_test.go:19: Creating execution project (1): test-acc-tf-p-5608152866628901814
2026-05-21T01:05:54.1251113Z     resource_test.go:19: 
2026-05-21T01:05:54.1252644Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:05:54.1256037Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:05:54.1259144Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:05:54.1261551Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccountsecret/resource_test.go:19
2026-05-21T01:05:54.1262556Z         	Error:      	Received unexpected error:
2026-05-21T01:05:54.1265130Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:54.1266400Z         	Test:       	TestAccProjectServiceAccountSecret_basic
2026-05-21T01:05:54.1287079Z         	Messages:   	Project creation failed: test-acc-tf-p-5608152866628901814, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:54.1289061Z --- FAIL: TestAccProjectServiceAccountSecret_basic (66.87s)
```

- 2026-05-22 PASS 9 seconds
- 2026-05-23 PASS 48 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 8 seconds
- 2026-05-26 PASS 16 seconds
- 2026-05-27 PASS 8 seconds
- 2026-05-28 PASS 9 seconds
- 2026-05-29 PASS 8 seconds
- 2026-05-30

### Error 2026-05-30T01:03:36+00:00
```
2026-05-30T01:03:36.9222631Z === RUN   TestAccProjectServiceAccountSecret_basic
2026-05-30T01:03:36.9223667Z     resource_test.go:19: Creating execution project (1): test-acc-tf-p-5938267656625081014
2026-05-30T01:03:36.9224789Z     resource_test.go:19: 
2026-05-30T01:03:36.9227847Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:03:36.9230022Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:03:36.9231850Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:03:36.9233869Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccountsecret/resource_test.go:19
2026-05-30T01:03:36.9235606Z         	Error:      	Received unexpected error:
2026-05-30T01:03:36.9237613Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:03:36.9238732Z         	Test:       	TestAccProjectServiceAccountSecret_basic
2026-05-30T01:03:36.9240628Z         	Messages:   	Project creation failed: test-acc-tf-p-5938267656625081014, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:03:36.9241840Z --- FAIL: TestAccProjectServiceAccountSecret_basic (63.99s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 8 seconds
- 2026-06-02 PASS 10 seconds
- 2026-06-03 PASS 7 seconds
- 2026-06-04 PASS 9 seconds
- 2026-06-05 PASS 9 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 7 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 8 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 8 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 7 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
