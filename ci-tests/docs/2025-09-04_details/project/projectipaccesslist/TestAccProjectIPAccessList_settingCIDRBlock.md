# project/projectipaccesslist/TestAccProjectIPAccessList_settingCIDRBlock Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:34](#error-2025-09-01t0034530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s
[2025-09-01 16:20](#error-2025-09-01t1620560000) |  | dev | 11.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 27 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 24 seconds
- 2025-08-09 PASS 23 seconds
- 2025-08-10 PASS 34 seconds
- 2025-08-11 PASS 2 minutes
- 2025-08-12
  - PASS 4 minutes
  - PASS 23 seconds
- 2025-08-13 PASS 2 minutes
- 2025-08-14 PASS 23 seconds
- 2025-08-15 PASS 2 minutes
- 2025-08-16 PASS 23 seconds
- 2025-08-17 PASS 23 seconds
- 2025-08-18 PASS 24 seconds
- 2025-08-19 PASS 26 seconds
- 2025-08-20
  - PASS 2 minutes
  - PASS 26 seconds
- 2025-08-21 PASS 2 minutes
- 2025-08-22 PASS 23 seconds
- 2025-08-23 PASS 23 seconds
- 2025-08-24 PASS 23 seconds
- 2025-08-25 PASS 23 seconds
- 2025-08-26 PASS 4 minutes
- 2025-08-27 PASS 2 minutes
- 2025-08-28 PASS 35 seconds
- 2025-08-29 PASS 23 seconds
- 2025-08-30 PASS 2 minutes
- 2025-08-31 PASS 26 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:34:53+00:00
```
2025-09-01T00:34:53.2834792Z === RUN   TestAccProjectIPAccessList_settingCIDRBlock
2025-09-01T00:34:53.2835426Z     resource_project_ip_access_list_test.go:56: Creating execution project: test-acc-tf-p-1653479849729506987
2025-09-01T00:34:53.2835978Z     resource_project_ip_access_list_test.go:56: 
2025-09-01T00:34:53.2836885Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:34:53.2838578Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:34:53.2840613Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:56
2025-09-01T00:34:53.2841562Z         	Error:      	Received unexpected error:
2025-09-01T00:34:53.2844199Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:34:53.2845552Z         	Test:       	TestAccProjectIPAccessList_settingCIDRBlock
2025-09-01T00:34:53.2847736Z         	Messages:   	Project creation failed: test-acc-tf-p-1653479849729506987, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:34:53.2849157Z --- FAIL: TestAccProjectIPAccessList_settingCIDRBlock (0.10s)
```

  - PASS 25 seconds
  - PASS 2 minutes
  - PASS 26 seconds
  - PASS 23 seconds
  - PASS 23 seconds
  - PASS 25 seconds
  - FAIL 11 seconds

### Error 2025-09-01T16:20:56+00:00
```
2025-09-01T16:20:56.8508650Z === RUN   TestAccProjectIPAccessList_settingCIDRBlock
2025-09-01T16:20:56.8517069Z === CONT  TestAccProjectIPAccessList_settingCIDRBlock
2025-09-01T16:20:56.8529674Z === NAME  TestAccProjectIPAccessList_settingCIDRBlock
2025-09-01T16:20:56.8531022Z     resource_project_ip_access_list_test.go:63: Step 1/2 error: Error running apply: exit status 1
2025-09-01T16:20:56.8531774Z         
2025-09-01T16:20:56.8532426Z         Error: Provider produced inconsistent result after apply
2025-09-01T16:20:56.8532984Z         
2025-09-01T16:20:56.8533792Z         When applying changes to mongodbatlas_project_ip_access_list.test, provider
2025-09-01T16:20:56.8534901Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-01T16:20:56.8535993Z         unexpected new value: .comment: was cty.StringVal("TestAcc for cidrBlock
2025-09-01T16:20:56.8536965Z         (179.154.226.68/32)"), but now cty.StringVal("TestAcc for ipaddres
2025-09-01T16:20:56.8537587Z         (179.154.226.68)").
2025-09-01T16:20:56.8537970Z         
2025-09-01T16:20:56.8538931Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-01T16:20:56.8539619Z         issue tracker.
2025-09-01T16:20:56.8561458Z   
2025-09-01T16:20:56.8574499Z --- FAIL: TestAccProjectIPAccessList_settingCIDRBlock (11.33s)
```

- 2025-09-02 PASS 26 seconds
- 2025-09-03 PASS 23 seconds
- 2025-09-04 PASS 23 seconds