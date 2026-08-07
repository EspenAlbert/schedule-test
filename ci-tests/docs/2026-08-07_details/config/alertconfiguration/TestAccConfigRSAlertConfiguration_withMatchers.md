# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withMatchers Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 96.02s
[2026-07-18 00:51](#error-2026-07-18t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.07s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7045997Z === RUN   TestAccConfigRSAlertConfiguration_withMatchers
2026-07-09T00:58:00.7046768Z     resource_test.go:191: Creating execution project (1): test-acc-tf-p-3662034793389028037
2026-07-09T00:58:00.7047278Z     resource_test.go:191: 
2026-07-09T00:58:00.7048216Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.7050107Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.7051975Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.7054120Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:191
2026-07-09T00:58:00.7054961Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.7057192Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7058452Z         	Test:       	TestAccConfigRSAlertConfiguration_withMatchers
2026-07-09T00:58:00.7060315Z         	Messages:   	Project creation failed: test-acc-tf-p-3662034793389028037, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7061588Z --- FAIL: TestAccConfigRSAlertConfiguration_withMatchers (96.22s)
```

- 2026-07-10 PASS 22 seconds
- 2026-07-11 PASS 16 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 14 seconds
- 2026-07-14 PASS 12 seconds
- 2026-07-15 PASS 19 seconds
- 2026-07-16 PASS 13 seconds
- 2026-07-17 PASS 35 seconds
- 2026-07-18

### Error 2026-07-18T00:51:48+00:00
```
2026-07-18T00:51:48.7777693Z === RUN   TestAccConfigRSAlertConfiguration_withMatchers
2026-07-18T00:51:48.7778334Z     resource_test.go:191: Creating execution project (1): test-acc-tf-p-465579595438960907
2026-07-18T00:51:48.7778843Z     resource_test.go:191: 
2026-07-18T00:51:48.7779793Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:51:48.7781676Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:51:48.7783828Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:51:48.7785841Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:191
2026-07-18T00:51:48.7786694Z         	Error:      	Received unexpected error:
2026-07-18T00:51:48.7788867Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.7790017Z         	Test:       	TestAccConfigRSAlertConfiguration_withMatchers
2026-07-18T00:51:48.7791872Z         	Messages:   	Project creation failed: test-acc-tf-p-465579595438960907, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.7793404Z --- FAIL: TestAccConfigRSAlertConfiguration_withMatchers (62.73s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3634066Z === RUN   TestAccConfigRSAlertConfiguration_withMatchers
2026-07-21T00:53:42.3634482Z     resource_test.go:191: Creating execution project (1): test-acc-tf-p-6279202122559470094
2026-07-21T00:53:42.3634821Z     resource_test.go:191: 
2026-07-21T00:53:42.3635411Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.3636548Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.3637691Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.3639046Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:191
2026-07-21T00:53:42.3639584Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.3640835Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.3641545Z         	Test:       	TestAccConfigRSAlertConfiguration_withMatchers
2026-07-21T00:53:42.3642732Z         	Messages:   	Project creation failed: test-acc-tf-p-6279202122559470094, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.3643517Z --- FAIL: TestAccConfigRSAlertConfiguration_withMatchers (76.17s)
```

- 2026-07-22 PASS 31 seconds
- 2026-07-23 PASS 9 seconds
- 2026-07-24 PASS 25 seconds
- 2026-07-25 PASS 12 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 18 seconds
- 2026-07-28 PASS 12 seconds
- 2026-07-29 PASS 23 seconds
- 2026-07-30 PASS 10 seconds
- 2026-07-31 PASS 30 seconds
- 2026-08-01 PASS 14 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 26 seconds
- 2026-08-04 PASS 9 seconds
- 2026-08-05 PASS 27 seconds
- 2026-08-06 PASS 15 seconds
- 2026-08-07 PASS 21 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 22 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 33 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 30 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 24 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 15 seconds
  - PASS 35 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 33 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
