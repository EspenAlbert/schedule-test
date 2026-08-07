# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidLowercaseRegion Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058290000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.03s
[2026-07-21 00:52](#error-2026-07-21t0052210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.06s
[2026-07-23 00:53](#error-2026-07-23t0053540000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:29+00:00
```
2026-07-09T00:58:29.1701974Z === RUN   TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidLowercaseRegion
2026-07-09T00:58:29.1702784Z     resource_test.go:261: Creating execution project (1): test-acc-tf-p-3153086806762512433
2026-07-09T00:58:29.1703344Z     resource_test.go:261: 
2026-07-09T00:58:29.1704320Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:29.1706182Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:29.1708039Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:29.1710286Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:261
2026-07-09T00:58:29.1711172Z         	Error:      	Received unexpected error:
2026-07-09T00:58:29.1714328Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:29.1716032Z         	Test:       	TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidLowercaseRegion
2026-07-09T00:58:29.1718621Z         	Messages:   	Project creation failed: test-acc-tf-p-3153086806762512433, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:29.1720552Z --- FAIL: TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidLowercaseRegion (1.28s)
```

- 2026-07-10 PASS a second
- 2026-07-11 PASS a second
- 2026-07-12: MISSING
- 2026-07-13 PASS a second
- 2026-07-14 PASS a second
- 2026-07-15 PASS a second
- 2026-07-16 PASS a second
- 2026-07-17 PASS a second
- 2026-07-18 PASS a second
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:21+00:00
```
2026-07-21T00:52:21.4488067Z === RUN   TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidLowercaseRegion
2026-07-21T00:52:21.4488845Z     resource_test.go:261: Creating execution project (1): test-acc-tf-p-1950502794541746620
2026-07-21T00:52:21.4489388Z     resource_test.go:261: 
2026-07-21T00:52:21.4490349Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:21.4492247Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:21.4494282Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:21.4496299Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:261
2026-07-21T00:52:21.4497179Z         	Error:      	Received unexpected error:
2026-07-21T00:52:21.4500120Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:21.4501821Z         	Test:       	TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidLowercaseRegion
2026-07-21T00:52:21.4504657Z         	Messages:   	Project creation failed: test-acc-tf-p-1950502794541746620, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:21.4506448Z --- FAIL: TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidLowercaseRegion (0.63s)
```

- 2026-07-22 PASS a second
- 2026-07-23

### Error 2026-07-23T00:53:54+00:00
```
2026-07-23T00:53:54.2436416Z === RUN   TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidLowercaseRegion
2026-07-23T00:53:54.2437192Z     resource_test.go:261: Creating execution project (1): test-acc-tf-p-9049737265487869457
2026-07-23T00:53:54.2437716Z     resource_test.go:261: 
2026-07-23T00:53:54.2438682Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:53:54.2440514Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:53:54.2442351Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:53:54.2444306Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:261
2026-07-23T00:53:54.2445267Z         	Error:      	Received unexpected error:
2026-07-23T00:53:54.2448155Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:53:54.2459837Z         	Test:       	TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidLowercaseRegion
2026-07-23T00:53:54.2462808Z         	Messages:   	Project creation failed: test-acc-tf-p-9049737265487869457, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:53:54.2464631Z --- FAIL: TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidLowercaseRegion (0.20s)
```

- 2026-07-24 PASS a second
- 2026-07-25 PASS a second
- 2026-07-26: MISSING
- 2026-07-27 PASS a second
- 2026-07-28 PASS a second
- 2026-07-29 PASS a second
- 2026-07-30 PASS a second
- 2026-07-31 PASS a second
- 2026-08-01 PASS a second
- 2026-08-02: MISSING
- 2026-08-03 PASS a second
- 2026-08-04 PASS a second
- 2026-08-05 PASS a second
- 2026-08-06 PASS a second
- 2026-08-07 PASS a second

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS a second
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS a second
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS a second
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS a second
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a second
  - PASS a second
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS a second
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
