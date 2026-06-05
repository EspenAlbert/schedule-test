# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-19 01:08](#error-2026-05-19t0108200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.05s
[2026-05-28 01:01](#error-2026-05-28t0101560000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 7 seconds
  - PASS 9 seconds
- 2026-05-08 PASS 20 seconds
- 2026-05-09 PASS 7 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 13 seconds
- 2026-05-12 PASS 8 seconds
- 2026-05-13 PASS 13 seconds
- 2026-05-14 PASS 10 seconds
- 2026-05-15 PASS 13 seconds
- 2026-05-16 PASS 8 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 10 seconds
- 2026-05-19

### Error 2026-05-19T01:08:20+00:00
```
2026-05-19T01:08:20.8552297Z === RUN   TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig
2026-05-19T01:08:20.8554207Z     resource_test.go:135: Creating execution project (1): test-acc-tf-p-7985813190326799021
2026-05-19T01:08:20.8555390Z     resource_test.go:135: 
2026-05-19T01:08:20.8557335Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:08:20.8560983Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:08:20.8566163Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:08:20.8570105Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:135
2026-05-19T01:08:20.8572082Z         	Error:      	Received unexpected error:
2026-05-19T01:08:20.8576284Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:20.8579450Z         	Test:       	TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig
2026-05-19T01:08:20.8583324Z         	Messages:   	Project creation failed: test-acc-tf-p-7985813190326799021, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:20.8586138Z --- FAIL: TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig (67.46s)
```

- 2026-05-20 PASS 14 seconds
- 2026-05-21 PASS 9 seconds
- 2026-05-22 PASS 13 seconds
- 2026-05-23 PASS 7 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 10 seconds
- 2026-05-26 PASS 8 seconds
- 2026-05-27 PASS 15 seconds
- 2026-05-28

### Error 2026-05-28T01:01:56+00:00
```
2026-05-28T01:01:56.7003623Z === RUN   TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig
2026-05-28T01:01:56.7004341Z     resource_test.go:135: Creating execution project (1): test-acc-tf-p-8900104837937989271
2026-05-28T01:01:56.7004829Z     resource_test.go:135: 
2026-05-28T01:01:56.7005733Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:56.7007530Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:56.7009326Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:56.7011551Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:135
2026-05-28T01:01:56.7012504Z         	Error:      	Received unexpected error:
2026-05-28T01:01:56.7015339Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:56.7016929Z         	Test:       	TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig
2026-05-28T01:01:56.7019416Z         	Messages:   	Project creation failed: test-acc-tf-p-8900104837937989271, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:56.7021448Z --- FAIL: TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig (0.39s)
```

- 2026-05-29 PASS 21 seconds
- 2026-05-30 PASS 8 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 19 seconds
- 2026-06-02 PASS 7 seconds
- 2026-06-03 PASS 18 seconds
- 2026-06-04 PASS 10 seconds
- 2026-06-05 PASS 8 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 18 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 18 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 17 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 18 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
