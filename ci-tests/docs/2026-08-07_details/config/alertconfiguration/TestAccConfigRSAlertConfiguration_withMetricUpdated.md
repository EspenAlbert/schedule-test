# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withMetricUpdated Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.08s
[2026-07-18 00:51](#error-2026-07-18t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.02s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.00s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7062074Z === RUN   TestAccConfigRSAlertConfiguration_withMetricUpdated
2026-07-09T00:58:00.7062719Z     resource_test.go:239: Creating execution project (1): test-acc-tf-p-8744008699179774912
2026-07-09T00:58:00.7063225Z     resource_test.go:239: 
2026-07-09T00:58:00.7064150Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.7066259Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.7068124Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.7070119Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:239
2026-07-09T00:58:00.7070965Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.7072968Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7074121Z         	Test:       	TestAccConfigRSAlertConfiguration_withMetricUpdated
2026-07-09T00:58:00.7076244Z         	Messages:   	Project creation failed: test-acc-tf-p-8744008699179774912, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7077550Z --- FAIL: TestAccConfigRSAlertConfiguration_withMetricUpdated (74.85s)
```

- 2026-07-10 PASS 21 seconds
- 2026-07-11 PASS 13 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 14 seconds
- 2026-07-14 PASS 11 seconds
- 2026-07-15 PASS 17 seconds
- 2026-07-16 PASS 12 seconds
- 2026-07-17 PASS 36 seconds
- 2026-07-18

### Error 2026-07-18T00:51:48+00:00
```
2026-07-18T00:51:48.7793907Z === RUN   TestAccConfigRSAlertConfiguration_withMetricUpdated
2026-07-18T00:51:48.7794559Z     resource_test.go:239: Creating execution project (1): test-acc-tf-p-8694244685895550144
2026-07-18T00:51:48.7795076Z     resource_test.go:239: 
2026-07-18T00:51:48.7796024Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:51:48.7797918Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:51:48.7799798Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:51:48.7801803Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:239
2026-07-18T00:51:48.7802969Z         	Error:      	Received unexpected error:
2026-07-18T00:51:48.7805007Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.7806358Z         	Test:       	TestAccConfigRSAlertConfiguration_withMetricUpdated
2026-07-18T00:51:48.7808238Z         	Messages:   	Project creation failed: test-acc-tf-p-8694244685895550144, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.7809548Z --- FAIL: TestAccConfigRSAlertConfiguration_withMetricUpdated (67.15s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3643854Z === RUN   TestAccConfigRSAlertConfiguration_withMetricUpdated
2026-07-21T00:53:42.3644271Z     resource_test.go:239: Creating execution project (1): test-acc-tf-p-104777410148214120
2026-07-21T00:53:42.3644603Z     resource_test.go:239: 
2026-07-21T00:53:42.3645198Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.3646352Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.3647494Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.3648831Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:239
2026-07-21T00:53:42.3649379Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.3650576Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.3651301Z         	Test:       	TestAccConfigRSAlertConfiguration_withMetricUpdated
2026-07-21T00:53:42.3652438Z         	Messages:   	Project creation failed: test-acc-tf-p-104777410148214120, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.3653222Z --- FAIL: TestAccConfigRSAlertConfiguration_withMetricUpdated (62.03s)
```

- 2026-07-22 PASS 31 seconds
- 2026-07-23 PASS 10 seconds
- 2026-07-24 PASS 26 seconds
- 2026-07-25 PASS 12 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 19 seconds
- 2026-07-28 PASS 12 seconds
- 2026-07-29 PASS 22 seconds
- 2026-07-30 PASS 10 seconds
- 2026-07-31 PASS 31 seconds
- 2026-08-01 PASS 14 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 25 seconds
- 2026-08-04 PASS 9 seconds
- 2026-08-05 PASS 27 seconds
- 2026-08-06 PASS 15 seconds
- 2026-08-07 PASS 22 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 22 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 34 seconds
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
