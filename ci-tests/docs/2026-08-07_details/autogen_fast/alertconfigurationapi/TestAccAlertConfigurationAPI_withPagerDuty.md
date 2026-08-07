# autogen_fast/alertconfigurationapi/TestAccAlertConfigurationAPI_withPagerDuty Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.09s
[2026-07-21 00:52](#error-2026-07-21t0052270000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.10s
[2026-07-23 00:48](#error-2026-07-23t0048360000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 10 seconds
- 2026-07-10 PASS 5 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1359786Z === RUN   TestAccAlertConfigurationAPI_withPagerDuty
2026-07-11T00:54:31.1360449Z     resource_test.go:278: Creating execution project (1): test-acc-tf-p-4136244019092532806
2026-07-11T00:54:31.1361008Z     resource_test.go:278: 
2026-07-11T00:54:31.1361991Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1363877Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1365971Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1368178Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:278
2026-07-11T00:54:31.1369092Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1371106Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1372249Z         	Test:       	TestAccAlertConfigurationAPI_withPagerDuty
2026-07-11T00:54:31.1374109Z         	Messages:   	Project creation failed: test-acc-tf-p-4136244019092532806, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1375406Z --- FAIL: TestAccAlertConfigurationAPI_withPagerDuty (61.89s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 7 seconds
- 2026-07-14 PASS 6 seconds
- 2026-07-15 PASS 7 seconds
- 2026-07-16 PASS 6 seconds
- 2026-07-17 PASS 7 seconds
- 2026-07-18 PASS 5 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:27+00:00
```
2026-07-21T00:52:27.2219204Z === RUN   TestAccAlertConfigurationAPI_withPagerDuty
2026-07-21T00:52:27.2219889Z     resource_test.go:278: Creating execution project (1): test-acc-tf-p-3228566260231683324
2026-07-21T00:52:27.2220455Z     resource_test.go:278: 
2026-07-21T00:52:27.2221437Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:27.2223280Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:27.2225315Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:27.2227356Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:278
2026-07-21T00:52:27.2228264Z         	Error:      	Received unexpected error:
2026-07-21T00:52:27.2231163Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:27.2232624Z         	Test:       	TestAccAlertConfigurationAPI_withPagerDuty
2026-07-21T00:52:27.2235179Z         	Messages:   	Project creation failed: test-acc-tf-p-3228566260231683324, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:27.2236977Z --- FAIL: TestAccAlertConfigurationAPI_withPagerDuty (0.97s)
```

- 2026-07-22 PASS 7 seconds
- 2026-07-23

### Error 2026-07-23T00:48:36+00:00
```
2026-07-23T00:48:36.8981909Z === RUN   TestAccAlertConfigurationAPI_withPagerDuty
2026-07-23T00:48:36.8982434Z     resource_test.go:278: Creating execution project (1): test-acc-tf-p-5613187821052124877
2026-07-23T00:48:36.8983005Z     resource_test.go:278: 
2026-07-23T00:48:36.8983775Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:36.8985231Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:36.8986683Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:36.8988259Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:278
2026-07-23T00:48:36.8989121Z         	Error:      	Received unexpected error:
2026-07-23T00:48:36.8991371Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:36.8992506Z         	Test:       	TestAccAlertConfigurationAPI_withPagerDuty
2026-07-23T00:48:36.8994671Z         	Messages:   	Project creation failed: test-acc-tf-p-5613187821052124877, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:36.8995944Z --- FAIL: TestAccAlertConfigurationAPI_withPagerDuty (0.51s)
```

- 2026-07-24 PASS 7 seconds
- 2026-07-25 PASS 7 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 10 seconds
- 2026-07-28 PASS 7 seconds
- 2026-07-29 PASS 7 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31 PASS 7 seconds
- 2026-08-01 PASS 7 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 7 seconds
- 2026-08-04 PASS 6 seconds
- 2026-08-05 PASS 7 seconds
- 2026-08-06 PASS 7 seconds
- 2026-08-07 PASS 7 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 7 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 7 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 7 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 7 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 8 seconds
  - PASS 8 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 8 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
