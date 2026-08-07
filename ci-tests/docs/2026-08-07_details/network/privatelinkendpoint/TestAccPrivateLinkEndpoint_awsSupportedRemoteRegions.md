# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_awsSupportedRemoteRegions Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058290000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s
[2026-07-21 00:52](#error-2026-07-21t0052210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.07s
[2026-07-23 00:53](#error-2026-07-23t0053540000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:29+00:00
```
2026-07-09T00:58:29.1656927Z === RUN   TestAccPrivateLinkEndpoint_awsSupportedRemoteRegions
2026-07-09T00:58:29.1657594Z     resource_test.go:168: Creating execution project (1): test-acc-tf-p-3447601330728360657
2026-07-09T00:58:29.1658126Z     resource_test.go:168: 
2026-07-09T00:58:29.1659074Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:29.1661060Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:29.1662906Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:29.1664878Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:168
2026-07-09T00:58:29.1665733Z         	Error:      	Received unexpected error:
2026-07-09T00:58:29.1668628Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:29.1670369Z         	Test:       	TestAccPrivateLinkEndpoint_awsSupportedRemoteRegions
2026-07-09T00:58:29.1672844Z         	Messages:   	Project creation failed: test-acc-tf-p-3447601330728360657, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:29.1674507Z --- FAIL: TestAccPrivateLinkEndpoint_awsSupportedRemoteRegions (0.92s)
```

- 2026-07-10 PASS 7 minutes
- 2026-07-11 PASS 6 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 24 minutes
- 2026-07-14 PASS 7 minutes
- 2026-07-15 PASS 8 minutes
- 2026-07-16 PASS 9 minutes
- 2026-07-17 PASS 6 minutes
- 2026-07-18 PASS 7 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:21+00:00
```
2026-07-21T00:52:21.4448356Z === RUN   TestAccPrivateLinkEndpoint_awsSupportedRemoteRegions
2026-07-21T00:52:21.4449389Z     resource_test.go:168: Creating execution project (1): test-acc-tf-p-6515405873498579068
2026-07-21T00:52:21.4450077Z     resource_test.go:168: 
2026-07-21T00:52:21.4451094Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:21.4453082Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:21.4455543Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:21.4457621Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:168
2026-07-21T00:52:21.4458522Z         	Error:      	Received unexpected error:
2026-07-21T00:52:21.4461684Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:21.4463375Z         	Test:       	TestAccPrivateLinkEndpoint_awsSupportedRemoteRegions
2026-07-21T00:52:21.4466070Z         	Messages:   	Project creation failed: test-acc-tf-p-6515405873498579068, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:21.4467791Z --- FAIL: TestAccPrivateLinkEndpoint_awsSupportedRemoteRegions (0.68s)
```

- 2026-07-22 PASS 7 minutes
- 2026-07-23

### Error 2026-07-23T00:53:54+00:00
```
2026-07-23T00:53:54.2399680Z === RUN   TestAccPrivateLinkEndpoint_awsSupportedRemoteRegions
2026-07-23T00:53:54.2400355Z     resource_test.go:168: Creating execution project (1): test-acc-tf-p-6353393079321320177
2026-07-23T00:53:54.2400901Z     resource_test.go:168: 
2026-07-23T00:53:54.2401861Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:53:54.2403716Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:53:54.2405669Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:53:54.2407641Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:168
2026-07-23T00:53:54.2408498Z         	Error:      	Received unexpected error:
2026-07-23T00:53:54.2411403Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:53:54.2413200Z         	Test:       	TestAccPrivateLinkEndpoint_awsSupportedRemoteRegions
2026-07-23T00:53:54.2415725Z         	Messages:   	Project creation failed: test-acc-tf-p-6353393079321320177, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:53:54.2417290Z --- FAIL: TestAccPrivateLinkEndpoint_awsSupportedRemoteRegions (0.85s)
```

- 2026-07-24 PASS 6 minutes
- 2026-07-25 PASS 7 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 7 minutes
- 2026-07-28 PASS 4 minutes
- 2026-07-29 PASS 4 minutes
- 2026-07-30 PASS 4 minutes
- 2026-07-31 PASS 4 minutes
- 2026-08-01 PASS 4 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 3 minutes
- 2026-08-04 PASS 4 minutes
- 2026-08-05 PASS 6 minutes
- 2026-08-06 PASS 6 minutes
- 2026-08-07 PASS 6 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 7 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 7 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 7 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 9 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 9 minutes
  - PASS 6 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 4 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
