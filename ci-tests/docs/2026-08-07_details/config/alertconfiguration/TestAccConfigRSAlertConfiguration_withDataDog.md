# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withDataDog Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.08s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7188399Z === RUN   TestAccConfigRSAlertConfiguration_withDataDog
2026-07-09T00:58:00.7189052Z     resource_test.go:442: Creating execution project (1): test-acc-tf-p-6742852379760470273
2026-07-09T00:58:00.7189558Z     resource_test.go:442: 
2026-07-09T00:58:00.7190487Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.7211300Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.7213269Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.7215454Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:449
2026-07-09T00:58:00.7217791Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:442
2026-07-09T00:58:00.7219080Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T00:58:00.7219626Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.7222698Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7224246Z         	Test:       	TestAccConfigRSAlertConfiguration_withDataDog
2026-07-09T00:58:00.7226941Z         	Messages:   	Project creation failed: test-acc-tf-p-6742852379760470273, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7228590Z --- FAIL: TestAccConfigRSAlertConfiguration_withDataDog (0.79s)
```

- 2026-07-10 PASS 6 seconds
- 2026-07-11 PASS 9 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 4 seconds
- 2026-07-14 PASS 8 seconds
- 2026-07-15 PASS 4 seconds
- 2026-07-16 PASS 6 seconds
- 2026-07-17 PASS 5 seconds
- 2026-07-18 PASS 8 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3719713Z === RUN   TestAccConfigRSAlertConfiguration_withDataDog
2026-07-21T00:53:42.3720123Z     resource_test.go:442: Creating execution project (1): test-acc-tf-p-51723225120764999
2026-07-21T00:53:42.3720458Z     resource_test.go:442: 
2026-07-21T00:53:42.3721059Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.3722258Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.3723413Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.3724641Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:449
2026-07-21T00:53:42.3725893Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:442
2026-07-21T00:53:42.3726681Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:53:42.3727030Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.3728883Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3729786Z         	Test:       	TestAccConfigRSAlertConfiguration_withDataDog
2026-07-21T00:53:42.3731302Z         	Messages:   	Project creation failed: test-acc-tf-p-51723225120764999, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3732275Z --- FAIL: TestAccConfigRSAlertConfiguration_withDataDog (0.65s)
```

- 2026-07-22 PASS 4 seconds
- 2026-07-23 PASS 6 seconds
- 2026-07-24 PASS 5 seconds
- 2026-07-25 PASS 4 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 6 seconds
- 2026-07-28 PASS 5 seconds
- 2026-07-29 PASS 4 seconds
- 2026-07-30 PASS 3 seconds
- 2026-07-31 PASS 5 seconds
- 2026-08-01 PASS 4 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 3 seconds
- 2026-08-04 PASS 4 seconds
- 2026-08-05 PASS 3 seconds
- 2026-08-06 PASS 3 seconds
- 2026-08-07 PASS 5 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 4 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 4 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 4 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 4 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 3 seconds
  - PASS 3 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 5 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
