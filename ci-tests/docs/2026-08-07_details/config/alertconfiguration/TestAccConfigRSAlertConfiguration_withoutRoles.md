# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withoutRoles Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.09s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7096589Z === RUN   TestAccConfigRSAlertConfiguration_withoutRoles
2026-07-09T00:58:00.7097234Z     resource_test.go:307: Creating execution project (1): test-acc-tf-p-1956676660394095538
2026-07-09T00:58:00.7097742Z     resource_test.go:307: 
2026-07-09T00:58:00.7098676Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.7100545Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.7102415Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.7104403Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:307
2026-07-09T00:58:00.7105467Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.7108424Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7109922Z         	Test:       	TestAccConfigRSAlertConfiguration_withoutRoles
2026-07-09T00:58:00.7112387Z         	Messages:   	Project creation failed: test-acc-tf-p-1956676660394095538, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7114014Z --- FAIL: TestAccConfigRSAlertConfiguration_withoutRoles (0.87s)
```

- 2026-07-10 PASS 13 seconds
- 2026-07-11 PASS 8 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 10 seconds
- 2026-07-14 PASS 9 seconds
- 2026-07-15 PASS 12 seconds
- 2026-07-16 PASS 7 seconds
- 2026-07-17 PASS 23 seconds
- 2026-07-18 PASS 34 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3663329Z === RUN   TestAccConfigRSAlertConfiguration_withoutRoles
2026-07-21T00:53:42.3663790Z     resource_test.go:307: Creating execution project (1): test-acc-tf-p-9049817919139045767
2026-07-21T00:53:42.3664135Z     resource_test.go:307: 
2026-07-21T00:53:42.3664726Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.3665882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.3667029Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.3668228Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:307
2026-07-21T00:53:42.3668922Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.3670688Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3671632Z         	Test:       	TestAccConfigRSAlertConfiguration_withoutRoles
2026-07-21T00:53:42.3673146Z         	Messages:   	Project creation failed: test-acc-tf-p-9049817919139045767, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3674165Z --- FAIL: TestAccConfigRSAlertConfiguration_withoutRoles (0.26s)
```

- 2026-07-22 PASS 18 seconds
- 2026-07-23 PASS 6 seconds
- 2026-07-24 PASS 14 seconds
- 2026-07-25 PASS 9 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 13 seconds
- 2026-07-28 PASS 8 seconds
- 2026-07-29 PASS 17 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31 PASS 18 seconds
- 2026-08-01 PASS 8 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 19 seconds
- 2026-08-04 PASS 6 seconds
- 2026-08-05 PASS 20 seconds
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
- 2026-07-15 PASS 23 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 23 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 18 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 9 seconds
  - PASS 26 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 19 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
