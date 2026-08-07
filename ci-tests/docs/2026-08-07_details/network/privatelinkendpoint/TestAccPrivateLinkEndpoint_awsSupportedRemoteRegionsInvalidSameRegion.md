# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidSameRegion Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058290000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.03s
[2026-07-21 00:52](#error-2026-07-21t0052210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.05s
[2026-07-23 00:53](#error-2026-07-23t0053540000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:29+00:00
```
2026-07-09T00:58:29.1675119Z === RUN   TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidSameRegion
2026-07-09T00:58:29.1675858Z     resource_test.go:242: Creating execution project (1): test-acc-tf-p-8059997054868125390
2026-07-09T00:58:29.1676524Z     resource_test.go:242: 
2026-07-09T00:58:29.1677476Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:29.1679452Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:29.1681342Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:29.1683326Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:242
2026-07-09T00:58:29.1684190Z         	Error:      	Received unexpected error:
2026-07-09T00:58:29.1687182Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:29.1688832Z         	Test:       	TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidSameRegion
2026-07-09T00:58:29.1699431Z         	Messages:   	Project creation failed: test-acc-tf-p-8059997054868125390, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:29.1701251Z --- FAIL: TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidSameRegion (1.27s)
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
2026-07-21T00:52:21.4468423Z === RUN   TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidSameRegion
2026-07-21T00:52:21.4469188Z     resource_test.go:242: Creating execution project (1): test-acc-tf-p-9155485255140184665
2026-07-21T00:52:21.4469738Z     resource_test.go:242: 
2026-07-21T00:52:21.4470705Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:21.4472594Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:21.4474820Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:21.4476848Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:242
2026-07-21T00:52:21.4477723Z         	Error:      	Received unexpected error:
2026-07-21T00:52:21.4480685Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:21.4482348Z         	Test:       	TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidSameRegion
2026-07-21T00:52:21.4485398Z         	Messages:   	Project creation failed: test-acc-tf-p-9155485255140184665, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:21.4487339Z --- FAIL: TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidSameRegion (0.47s)
```

- 2026-07-22 PASS a second
- 2026-07-23

### Error 2026-07-23T00:53:54+00:00
```
2026-07-23T00:53:54.2417911Z === RUN   TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidSameRegion
2026-07-23T00:53:54.2418674Z     resource_test.go:242: Creating execution project (1): test-acc-tf-p-8556242452889322901
2026-07-23T00:53:54.2419224Z     resource_test.go:242: 
2026-07-23T00:53:54.2420177Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:53:54.2422013Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:53:54.2423978Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:53:54.2426075Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:242
2026-07-23T00:53:54.2426960Z         	Error:      	Received unexpected error:
2026-07-23T00:53:54.2429858Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:53:54.2431434Z         	Test:       	TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidSameRegion
2026-07-23T00:53:54.2433917Z         	Messages:   	Project creation failed: test-acc-tf-p-8556242452889322901, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:53:54.2435695Z --- FAIL: TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidSameRegion (0.80s)
```

- 2026-07-24 PASS a second
- 2026-07-25 PASS a second
- 2026-07-26: MISSING
- 2026-07-27 PASS a second
- 2026-07-28 PASS a moment
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
