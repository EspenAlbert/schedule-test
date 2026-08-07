# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.03s
[2026-07-18 00:51](#error-2026-07-18t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.08s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.6996651Z === RUN   TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig
2026-07-09T00:58:00.6997367Z     resource_test.go:118: Creating execution project (1): test-acc-tf-p-403338167088375720
2026-07-09T00:58:00.6997890Z     resource_test.go:118: 
2026-07-09T00:58:00.6998828Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.7000700Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.7002573Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.7004559Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:118
2026-07-09T00:58:00.7005640Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.7007650Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7008898Z         	Test:       	TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig
2026-07-09T00:58:00.7010840Z         	Messages:   	Project creation failed: test-acc-tf-p-403338167088375720, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7012187Z --- FAIL: TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig (67.25s)
```

- 2026-07-10 PASS 12 seconds
- 2026-07-11 PASS 7 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 9 seconds
- 2026-07-14 PASS 36 seconds
- 2026-07-15 PASS 12 seconds
- 2026-07-16 PASS 6 seconds
- 2026-07-17 PASS 23 seconds
- 2026-07-18

### Error 2026-07-18T00:51:48+00:00
```
2026-07-18T00:51:48.7724707Z === RUN   TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig
2026-07-18T00:51:48.7725960Z     resource_test.go:118: Creating execution project (1): test-acc-tf-p-1040868036616689644
2026-07-18T00:51:48.7726817Z     resource_test.go:118: 
2026-07-18T00:51:48.7728264Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:51:48.7730408Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:51:48.7732843Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:51:48.7735380Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:118
2026-07-18T00:51:48.7736241Z         	Error:      	Received unexpected error:
2026-07-18T00:51:48.7738284Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.7739550Z         	Test:       	TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig
2026-07-18T00:51:48.7741499Z         	Messages:   	Project creation failed: test-acc-tf-p-1040868036616689644, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.7743243Z --- FAIL: TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig (71.76s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3601993Z === RUN   TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig
2026-07-21T00:53:42.3602732Z     resource_test.go:118: Creating execution project (1): test-acc-tf-p-7191199276997499561
2026-07-21T00:53:42.3603143Z     resource_test.go:118: 
2026-07-21T00:53:42.3603747Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.3605479Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.3606842Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.3608100Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:118
2026-07-21T00:53:42.3608795Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.3610027Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.3610802Z         	Test:       	TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig
2026-07-21T00:53:42.3611952Z         	Messages:   	Project creation failed: test-acc-tf-p-7191199276997499561, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.3612950Z --- FAIL: TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig (61.64s)
```

- 2026-07-22 PASS 15 seconds
- 2026-07-23 PASS 5 seconds
- 2026-07-24 PASS 12 seconds
- 2026-07-25 PASS 8 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 10 seconds
- 2026-07-28 PASS 8 seconds
- 2026-07-29 PASS 15 seconds
- 2026-07-30 PASS 6 seconds
- 2026-07-31 PASS 15 seconds
- 2026-08-01 PASS 7 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 18 seconds
- 2026-08-04 PASS 6 seconds
- 2026-08-05 PASS 19 seconds
- 2026-08-06 PASS 8 seconds
- 2026-08-07 PASS 12 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 13 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 22 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 22 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 16 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 8 seconds
  - PASS 23 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 17 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
