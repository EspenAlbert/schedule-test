# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withNotifications Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.08s
[2026-07-18 00:51](#error-2026-07-18t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.01s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7029812Z === RUN   TestAccConfigRSAlertConfiguration_withNotifications
2026-07-09T00:58:00.7030473Z     resource_test.go:156: Creating execution project (1): test-acc-tf-p-6918727101978125827
2026-07-09T00:58:00.7030984Z     resource_test.go:156: 
2026-07-09T00:58:00.7031924Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.7033797Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.7035934Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.7037931Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:156
2026-07-09T00:58:00.7038773Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.7040794Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7041942Z         	Test:       	TestAccConfigRSAlertConfiguration_withNotifications
2026-07-09T00:58:00.7043968Z         	Messages:   	Project creation failed: test-acc-tf-p-6918727101978125827, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7045489Z --- FAIL: TestAccConfigRSAlertConfiguration_withNotifications (67.75s)
```

- 2026-07-10 PASS 25 seconds
- 2026-07-11 PASS 16 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 16 seconds
- 2026-07-14 PASS 13 seconds
- 2026-07-15 PASS 21 seconds
- 2026-07-16 PASS 13 seconds
- 2026-07-17 PASS 37 seconds
- 2026-07-18

### Error 2026-07-18T00:51:48+00:00
```
2026-07-18T00:51:48.7761377Z === RUN   TestAccConfigRSAlertConfiguration_withNotifications
2026-07-18T00:51:48.7762042Z     resource_test.go:156: Creating execution project (1): test-acc-tf-p-3015486566579735829
2026-07-18T00:51:48.7762769Z     resource_test.go:156: 
2026-07-18T00:51:48.7763731Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:51:48.7765617Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:51:48.7767510Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:51:48.7769522Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:156
2026-07-18T00:51:48.7770572Z         	Error:      	Received unexpected error:
2026-07-18T00:51:48.7772836Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.7774015Z         	Test:       	TestAccConfigRSAlertConfiguration_withNotifications
2026-07-18T00:51:48.7775897Z         	Messages:   	Project creation failed: test-acc-tf-p-3015486566579735829, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.7777175Z --- FAIL: TestAccConfigRSAlertConfiguration_withNotifications (70.07s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3623942Z === RUN   TestAccConfigRSAlertConfiguration_withNotifications
2026-07-21T00:53:42.3624368Z     resource_test.go:156: Creating execution project (1): test-acc-tf-p-5502419631038306184
2026-07-21T00:53:42.3624701Z     resource_test.go:156: 
2026-07-21T00:53:42.3625299Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.3626435Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.3627569Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.3628996Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:156
2026-07-21T00:53:42.3629541Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.3630792Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.3631514Z         	Test:       	TestAccConfigRSAlertConfiguration_withNotifications
2026-07-21T00:53:42.3632635Z         	Messages:   	Project creation failed: test-acc-tf-p-5502419631038306184, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.3633419Z --- FAIL: TestAccConfigRSAlertConfiguration_withNotifications (63.23s)
```

- 2026-07-22 PASS 34 seconds
- 2026-07-23 PASS 11 seconds
- 2026-07-24 PASS 30 seconds
- 2026-07-25 PASS 13 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 21 seconds
- 2026-07-28 PASS 13 seconds
- 2026-07-29 PASS 24 seconds
- 2026-07-30 PASS 10 seconds
- 2026-07-31 PASS 33 seconds
- 2026-08-01 PASS 15 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 27 seconds
- 2026-08-04 PASS 10 seconds
- 2026-08-05 PASS 29 seconds
- 2026-08-06 PASS 16 seconds
- 2026-08-07 PASS 25 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 23 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 36 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 31 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 25 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 16 seconds
  - PASS 37 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 36 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
