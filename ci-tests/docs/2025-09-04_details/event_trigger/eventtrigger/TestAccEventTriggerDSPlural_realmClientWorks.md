# event_trigger/eventtrigger/TestAccEventTriggerDSPlural_realmClientWorks Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030240000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.04s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 5 seconds
- 2025-08-07 PASS 8 seconds
- 2025-08-08 PASS 5 seconds
- 2025-08-09 PASS 3 seconds
- 2025-08-10 PASS 3 seconds
- 2025-08-11 PASS 4 seconds
- 2025-08-12 PASS 3 seconds
- 2025-08-13 PASS 3 seconds
- 2025-08-14 PASS 4 seconds
- 2025-08-15 PASS 5 seconds
- 2025-08-16 PASS 2 seconds
- 2025-08-17 PASS 4 seconds
- 2025-08-18 PASS 3 seconds
- 2025-08-19 PASS 3 seconds
- 2025-08-20
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-08-21 PASS 3 seconds
- 2025-08-22 PASS 3 seconds
- 2025-08-23 PASS 3 seconds
- 2025-08-24 PASS 2 seconds
- 2025-08-25 PASS 4 seconds
- 2025-08-26 PASS 5 seconds
- 2025-08-27 PASS 4 seconds
- 2025-08-28 PASS 2 seconds
- 2025-08-29 PASS 3 seconds
- 2025-08-30 PASS 3 seconds
- 2025-08-31 PASS 2 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:24+00:00
```
2025-09-01T00:30:24.7934479Z === RUN   TestAccEventTriggerDSPlural_realmClientWorks
2025-09-01T00:30:24.7935558Z     data_source_event_triggers_test.go:57: Creating execution project: test-acc-tf-p-3115539423927573455
2025-09-01T00:30:25.1545220Z     data_source_event_triggers_test.go:57: 
2025-09-01T00:30:25.1547732Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:25.1551421Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:25.1555751Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/eventtrigger/data_source_event_triggers_test.go:57
2025-09-01T00:30:25.1557539Z         	Error:      	Received unexpected error:
2025-09-01T00:30:25.1562708Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:25.1565036Z         	Test:       	TestAccEventTriggerDSPlural_realmClientWorks
2025-09-01T00:30:25.1569294Z         	Messages:   	Project creation failed: test-acc-tf-p-3115539423927573455, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:25.1571983Z --- FAIL: TestAccEventTriggerDSPlural_realmClientWorks (0.36s)
```

  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-09-02 PASS 2 seconds
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 2 seconds