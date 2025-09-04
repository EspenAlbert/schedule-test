# ldap/ldapconfiguration/TestAccLDAPConfiguration_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030200000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 2 seconds
- 2025-08-07 PASS 21 seconds
- 2025-08-08 PASS 3 seconds
- 2025-08-09 PASS 2 seconds
- 2025-08-10 PASS a second
- 2025-08-11 PASS 2 seconds
- 2025-08-12 PASS a second
- 2025-08-13 PASS 2 seconds
- 2025-08-14 PASS 3 seconds
- 2025-08-15 PASS 3 seconds
- 2025-08-16 PASS 2 seconds
- 2025-08-17 PASS a second
- 2025-08-18 PASS a second
- 2025-08-19 PASS 3 seconds
- 2025-08-20
  - PASS a second
  - PASS a second
- 2025-08-21 PASS a second
- 2025-08-22 PASS 3 seconds
- 2025-08-23 PASS a second
- 2025-08-24 PASS 2 seconds
- 2025-08-25 PASS 2 seconds
- 2025-08-26 PASS 2 seconds
- 2025-08-27 PASS 3 seconds
- 2025-08-28 PASS 3 seconds
- 2025-08-29 PASS a second
- 2025-08-30 PASS a second
- 2025-08-31 PASS 2 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:20+00:00
```
2025-09-01T00:30:20.5962624Z === RUN   TestAccLDAPConfiguration_basic
2025-09-01T00:30:20.5963932Z     resource_ldap_configuration_test.go:22: Creating execution project: test-acc-tf-p-337150467879381706
2025-09-01T00:30:20.5965107Z     resource_ldap_configuration_test.go:22: 
2025-09-01T00:30:20.5966972Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:20.5970397Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:20.5974037Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:83
2025-09-01T00:30:20.5978214Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:22
2025-09-01T00:30:20.5980060Z         	Error:      	Received unexpected error:
2025-09-01T00:30:20.5985169Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:20.5987789Z         	Test:       	TestAccLDAPConfiguration_basic
2025-09-01T00:30:20.5992008Z         	Messages:   	Project creation failed: test-acc-tf-p-337150467879381706, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:20.5994784Z --- FAIL: TestAccLDAPConfiguration_basic (0.06s)
```

  - PASS a second
  - PASS a second
  - PASS 2 seconds
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS 2 seconds
- 2025-09-02 PASS a second
- 2025-09-03 PASS 2 seconds
- 2025-09-04 PASS a second