# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.05s
[2026-07-18 00:51](#error-2026-07-18t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.09s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7012844Z === RUN   TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig
2026-07-09T00:58:00.7013577Z     resource_test.go:135: Creating execution project (1): test-acc-tf-p-5588665959312322448
2026-07-09T00:58:00.7014084Z     resource_test.go:135: 
2026-07-09T00:58:00.7015022Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.7017389Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.7019263Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.7021268Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:135
2026-07-09T00:58:00.7022234Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.7024256Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7025817Z         	Test:       	TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig
2026-07-09T00:58:00.7027814Z         	Messages:   	Project creation failed: test-acc-tf-p-5588665959312322448, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7029205Z --- FAIL: TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig (82.47s)
```

- 2026-07-10 PASS 12 seconds
- 2026-07-11 PASS 12 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 10 seconds
- 2026-07-14 PASS 8 seconds
- 2026-07-15 PASS 12 seconds
- 2026-07-16 PASS 8 seconds
- 2026-07-17 PASS 23 seconds
- 2026-07-18

### Error 2026-07-18T00:51:48+00:00
```
2026-07-18T00:51:48.7743926Z === RUN   TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig
2026-07-18T00:51:48.7744684Z     resource_test.go:135: Creating execution project (1): test-acc-tf-p-6558855167521925807
2026-07-18T00:51:48.7745207Z     resource_test.go:135: 
2026-07-18T00:51:48.7746165Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:51:48.7748058Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:51:48.7749955Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:51:48.7752147Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:135
2026-07-18T00:51:48.7753246Z         	Error:      	Received unexpected error:
2026-07-18T00:51:48.7755333Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.7757050Z         	Test:       	TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig
2026-07-18T00:51:48.7759237Z         	Messages:   	Project creation failed: test-acc-tf-p-6558855167521925807, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.7760743Z --- FAIL: TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig (61.95s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3613387Z === RUN   TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig
2026-07-21T00:53:42.3613867Z     resource_test.go:135: Creating execution project (1): test-acc-tf-p-2617517657539929525
2026-07-21T00:53:42.3614206Z     resource_test.go:135: 
2026-07-21T00:53:42.3614801Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.3615950Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.3617089Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.3618388Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:135
2026-07-21T00:53:42.3618953Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.3620380Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.3621434Z         	Test:       	TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig
2026-07-21T00:53:42.3622705Z         	Messages:   	Project creation failed: test-acc-tf-p-2617517657539929525, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.3623538Z --- FAIL: TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig (63.20s)
```

- 2026-07-22 PASS 18 seconds
- 2026-07-23 PASS 7 seconds
- 2026-07-24 PASS 14 seconds
- 2026-07-25 PASS 9 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 14 seconds
- 2026-07-28 PASS 9 seconds
- 2026-07-29 PASS 17 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31 PASS 18 seconds
- 2026-08-01 PASS 8 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 19 seconds
- 2026-08-04 PASS 6 seconds
- 2026-08-05 PASS 21 seconds
- 2026-08-06 PASS 9 seconds
- 2026-08-07 PASS 13 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 15 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 24 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 24 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 17 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 9 seconds
  - PASS 25 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 20 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
