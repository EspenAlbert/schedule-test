# config/alertconfiguration/TestAccConfigRSAlertConfiguration_outsideStreamProcessorMetricThreshold Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.06s
[2026-07-14 00:45](#error-2026-07-14t0045330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.02s
[2026-07-18 00:51](#error-2026-07-18t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.08s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.6965923Z === RUN   TestAccConfigRSAlertConfiguration_outsideStreamProcessorMetricThreshold
2026-07-09T00:58:00.6967661Z     resource_test.go:85: Creating execution project (1): test-acc-tf-p-5526502578376968042
2026-07-09T00:58:00.6968589Z     resource_test.go:85: 
2026-07-09T00:58:00.6970344Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.6973844Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.6978431Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.6982323Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:85
2026-07-09T00:58:00.6983918Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.6987937Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.6990369Z         	Test:       	TestAccConfigRSAlertConfiguration_outsideStreamProcessorMetricThreshold
2026-07-09T00:58:00.6994079Z         	Messages:   	Project creation failed: test-acc-tf-p-5526502578376968042, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.6995974Z --- FAIL: TestAccConfigRSAlertConfiguration_outsideStreamProcessorMetricThreshold (65.62s)
```

- 2026-07-10 PASS 16 seconds
- 2026-07-11 PASS 14 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 12 seconds
- 2026-07-14

### Error 2026-07-14T00:45:33+00:00
```
2026-07-14T00:45:33.0593390Z === RUN   TestAccConfigRSAlertConfiguration_outsideStreamProcessorMetricThreshold
2026-07-14T00:45:33.0595852Z     resource_test.go:85: Creating execution project (1): test-acc-tf-p-2705168030324280372
2026-07-14T00:45:33.0601471Z     resource_test.go:85: 
2026-07-14T00:45:33.0604028Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T00:45:33.0611281Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-14T00:45:33.0622450Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-14T00:45:33.0626215Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:85
2026-07-14T00:45:33.0627996Z         	Error:      	Received unexpected error:
2026-07-14T00:45:33.0631759Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:45:33.0634074Z         	Test:       	TestAccConfigRSAlertConfiguration_outsideStreamProcessorMetricThreshold
2026-07-14T00:45:33.0639532Z         	Messages:   	Project creation failed: test-acc-tf-p-2705168030324280372, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:45:33.0646691Z --- FAIL: TestAccConfigRSAlertConfiguration_outsideStreamProcessorMetricThreshold (61.20s)
```

- 2026-07-15 PASS 15 seconds
- 2026-07-16 PASS 12 seconds
- 2026-07-17 PASS 30 seconds
- 2026-07-18

### Error 2026-07-18T00:51:48+00:00
```
2026-07-18T00:51:48.7701378Z === RUN   TestAccConfigRSAlertConfiguration_outsideStreamProcessorMetricThreshold
2026-07-18T00:51:48.7702335Z     resource_test.go:85: Creating execution project (1): test-acc-tf-p-1986853758040002664
2026-07-18T00:51:48.7703215Z     resource_test.go:85: 
2026-07-18T00:51:48.7704272Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:51:48.7706409Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:51:48.7709516Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:51:48.7712024Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:85
2026-07-18T00:51:48.7713359Z         	Error:      	Received unexpected error:
2026-07-18T00:51:48.7715691Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.7717411Z         	Test:       	TestAccConfigRSAlertConfiguration_outsideStreamProcessorMetricThreshold
2026-07-18T00:51:48.7720958Z         	Messages:   	Project creation failed: test-acc-tf-p-1986853758040002664, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.7723530Z --- FAIL: TestAccConfigRSAlertConfiguration_outsideStreamProcessorMetricThreshold (68.81s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3588635Z === RUN   TestAccConfigRSAlertConfiguration_outsideStreamProcessorMetricThreshold
2026-07-21T00:53:42.3589208Z     resource_test.go:85: Creating execution project (1): test-acc-tf-p-905870469312782369
2026-07-21T00:53:42.3589602Z     resource_test.go:85: 
2026-07-21T00:53:42.3590293Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.3591651Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.3592991Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.3594659Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:85
2026-07-21T00:53:42.3595346Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.3597034Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.3598219Z         	Test:       	TestAccConfigRSAlertConfiguration_outsideStreamProcessorMetricThreshold
2026-07-21T00:53:42.3600198Z         	Messages:   	Project creation failed: test-acc-tf-p-905870469312782369, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.3601357Z --- FAIL: TestAccConfigRSAlertConfiguration_outsideStreamProcessorMetricThreshold (83.87s)
```

- 2026-07-22 PASS 27 seconds
- 2026-07-23 PASS 9 seconds
- 2026-07-24 PASS 22 seconds
- 2026-07-25 PASS 11 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 16 seconds
- 2026-07-28 PASS 11 seconds
- 2026-07-29 PASS 19 seconds
- 2026-07-30 PASS 8 seconds
- 2026-07-31 PASS 25 seconds
- 2026-08-01 PASS 11 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 22 seconds
- 2026-08-04 PASS 8 seconds
- 2026-08-05 PASS 24 seconds
- 2026-08-06 PASS 12 seconds
- 2026-08-07 PASS 17 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 18 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 29 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 27 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 21 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 13 seconds
  - PASS 30 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 27 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
