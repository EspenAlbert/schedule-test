# autogen_fast/alertconfigurationapi/TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.10s
[2026-07-21 00:52](#error-2026-07-21t0052270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s
[2026-07-23 00:48](#error-2026-07-23t0048360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 9 seconds
- 2026-07-10 PASS 6 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1271751Z === RUN   TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-07-11T00:54:31.1272681Z     resource_test.go:88: Creating execution project (1): test-acc-tf-p-1195346039152209958
2026-07-11T00:54:31.1273249Z     resource_test.go:88: 
2026-07-11T00:54:31.1274240Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1276459Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1278380Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1280445Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:88
2026-07-11T00:54:31.1281363Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1283395Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1284758Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-07-11T00:54:31.1287084Z         	Messages:   	Project creation failed: test-acc-tf-p-1195346039152209958, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1288506Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig (62.97s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 6 seconds
- 2026-07-14 PASS 4 seconds
- 2026-07-15 PASS 6 seconds
- 2026-07-16 PASS 6 seconds
- 2026-07-17 PASS 7 seconds
- 2026-07-18 PASS 5 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:27+00:00
```
2026-07-21T00:52:27.2129966Z === RUN   TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-07-21T00:52:27.2130737Z     resource_test.go:88: Creating execution project (1): test-acc-tf-p-8372337549755159576
2026-07-21T00:52:27.2131300Z     resource_test.go:88: 
2026-07-21T00:52:27.2132283Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:27.2134153Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:27.2136235Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:27.2138255Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:88
2026-07-21T00:52:27.2139175Z         	Error:      	Received unexpected error:
2026-07-21T00:52:27.2141194Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:27.2142481Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-07-21T00:52:27.2144387Z         	Messages:   	Project creation failed: test-acc-tf-p-8372337549755159576, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:27.2145901Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig (61.61s)
```

- 2026-07-22 PASS 6 seconds
- 2026-07-23

### Error 2026-07-23T00:48:36+00:00
```
2026-07-23T00:48:36.8893970Z === RUN   TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-07-23T00:48:36.8894949Z     resource_test.go:88: Creating execution project (1): test-acc-tf-p-3101616687193314552
2026-07-23T00:48:36.8895515Z     resource_test.go:88: 
2026-07-23T00:48:36.8896289Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:36.8897718Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:36.8899165Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:36.8900712Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:88
2026-07-23T00:48:36.8901547Z         	Error:      	Received unexpected error:
2026-07-23T00:48:36.8903505Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:36.8918132Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-07-23T00:48:36.8920203Z         	Messages:   	Project creation failed: test-acc-tf-p-3101616687193314552, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:36.8921322Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig (67.91s)
```

- 2026-07-24 PASS 6 seconds
- 2026-07-25 PASS 6 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 9 seconds
- 2026-07-28 PASS 6 seconds
- 2026-07-29 PASS 6 seconds
- 2026-07-30 PASS 6 seconds
- 2026-07-31 PASS 6 seconds
- 2026-08-01 PASS 6 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 6 seconds
- 2026-08-04 PASS 5 seconds
- 2026-08-05 PASS 5 seconds
- 2026-08-06 PASS 6 seconds
- 2026-08-07 PASS 5 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 7 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 6 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 6 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 6 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 6 seconds
  - PASS 4 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 6 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
