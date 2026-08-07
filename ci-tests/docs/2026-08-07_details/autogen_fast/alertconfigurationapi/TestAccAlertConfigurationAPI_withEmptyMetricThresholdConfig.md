# autogen_fast/alertconfigurationapi/TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s
[2026-07-21 00:52](#error-2026-07-21t0052270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 93.05s
[2026-07-23 00:48](#error-2026-07-23t0048360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS a minute
- 2026-07-10 PASS 5 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1254232Z === RUN   TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-07-11T00:54:31.1254973Z     resource_test.go:66: Creating execution project (1): test-acc-tf-p-6342997354114684600
2026-07-11T00:54:31.1255527Z     resource_test.go:66: 
2026-07-11T00:54:31.1256782Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1258699Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1260612Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1262684Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:66
2026-07-11T00:54:31.1263613Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1265860Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1267288Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-07-11T00:54:31.1269259Z         	Messages:   	Project creation failed: test-acc-tf-p-6342997354114684600, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1270671Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig (63.23s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 6 seconds
- 2026-07-14 PASS 41 seconds
- 2026-07-15 PASS 6 seconds
- 2026-07-16 PASS a minute
- 2026-07-17 PASS 7 seconds
- 2026-07-18 PASS 5 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:27+00:00
```
2026-07-21T00:52:27.2112372Z === RUN   TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-07-21T00:52:27.2113145Z     resource_test.go:66: Creating execution project (1): test-acc-tf-p-1780963449096686160
2026-07-21T00:52:27.2113725Z     resource_test.go:66: 
2026-07-21T00:52:27.2114727Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:27.2117218Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:27.2119112Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:27.2121165Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:66
2026-07-21T00:52:27.2122080Z         	Error:      	Received unexpected error:
2026-07-21T00:52:27.2124101Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:27.2125840Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-07-21T00:52:27.2127787Z         	Messages:   	Project creation failed: test-acc-tf-p-1780963449096686160, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:27.2129147Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig (93.51s)
```

- 2026-07-22 PASS 5 seconds
- 2026-07-23

### Error 2026-07-23T00:48:36+00:00
```
2026-07-23T00:48:36.8879394Z === RUN   TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-07-23T00:48:36.8879978Z     resource_test.go:66: Creating execution project (1): test-acc-tf-p-6858934099138503496
2026-07-23T00:48:36.8880414Z     resource_test.go:66: 
2026-07-23T00:48:36.8881182Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:36.8883511Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:36.8885322Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:36.8886934Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:66
2026-07-23T00:48:36.8887652Z         	Error:      	Received unexpected error:
2026-07-23T00:48:36.8889501Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:36.8890450Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-07-23T00:48:36.8891906Z         	Messages:   	Project creation failed: test-acc-tf-p-6858934099138503496, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:36.8893154Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig (63.63s)
```

- 2026-07-24 PASS 6 seconds
- 2026-07-25 PASS 6 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 8 seconds
- 2026-07-28 PASS 6 seconds
- 2026-07-29 PASS 6 seconds
- 2026-07-30 PASS 6 seconds
- 2026-07-31 PASS 6 seconds
- 2026-08-01 PASS 6 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 6 seconds
- 2026-08-04 PASS 5 seconds
- 2026-08-05 PASS 6 seconds
- 2026-08-06 PASS 6 seconds
- 2026-08-07 PASS 6 seconds

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
- 2026-08-02 PASS 7 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
