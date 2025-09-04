# ldap/ldapconfiguration/TestMigLDAPConfiguration_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030200000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 8 seconds
- 2025-08-07 PASS 38 seconds
- 2025-08-08 PASS 10 seconds
- 2025-08-09 PASS 9 seconds
- 2025-08-10 PASS 7 seconds
- 2025-08-11 PASS 8 seconds
- 2025-08-12 PASS 7 seconds
- 2025-08-13 PASS 7 seconds
- 2025-08-14 PASS 11 seconds
- 2025-08-15 PASS 9 seconds
- 2025-08-16 PASS 8 seconds
- 2025-08-17 PASS 6 seconds
- 2025-08-18 PASS 7 seconds
- 2025-08-19 PASS 9 seconds
- 2025-08-20
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-08-21 PASS 8 seconds
- 2025-08-22 PASS 9 seconds
- 2025-08-23 PASS 7 seconds
- 2025-08-24 PASS 7 seconds
- 2025-08-25 PASS 10 seconds
- 2025-08-26 PASS 10 seconds
- 2025-08-27 PASS 10 seconds
- 2025-08-28 PASS 9 seconds
- 2025-08-29 PASS 7 seconds
- 2025-08-30 PASS 7 seconds
- 2025-08-31 PASS 9 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:20+00:00
```
2025-09-01T00:30:20.5930883Z === RUN   TestMigLDAPConfiguration_basic
2025-09-01T00:30:20.5932354Z     resource_ldap_configuration_migration_test.go:10: Creating execution project: test-acc-tf-p-873398531325189112
2025-09-01T00:30:20.5933537Z     resource_ldap_configuration_migration_test.go:10: 
2025-09-01T00:30:20.5935299Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:20.5938963Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:20.5943906Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:83
2025-09-01T00:30:20.5947777Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_migration_test.go:10
2025-09-01T00:30:20.5948975Z         	Error:      	Received unexpected error:
2025-09-01T00:30:20.5951907Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:20.5954403Z         	Test:       	TestMigLDAPConfiguration_basic
2025-09-01T00:30:20.5958965Z         	Messages:   	Project creation failed: test-acc-tf-p-873398531325189112, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:20.5961465Z --- FAIL: TestMigLDAPConfiguration_basic (0.29s)
```

  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 9 seconds
- 2025-09-02 PASS 8 seconds
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 8 seconds