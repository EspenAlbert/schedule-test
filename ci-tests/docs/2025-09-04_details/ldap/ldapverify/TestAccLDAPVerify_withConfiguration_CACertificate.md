# ldap/ldapverify/TestAccLDAPVerify_withConfiguration_CACertificate Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030220000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 3 minutes
- 2025-08-07 PASS 3 minutes
- 2025-08-08 PASS 3 minutes
- 2025-08-09 PASS 3 minutes
- 2025-08-10 PASS 3 minutes
- 2025-08-11 PASS 3 minutes
- 2025-08-12 PASS 3 minutes
- 2025-08-13 PASS 3 minutes
- 2025-08-14 PASS 3 minutes
- 2025-08-15 PASS 3 minutes
- 2025-08-16 PASS 3 minutes
- 2025-08-17 PASS 3 minutes
- 2025-08-18 PASS 3 minutes
- 2025-08-19 PASS 3 minutes
- 2025-08-20
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-08-21 PASS 3 minutes
- 2025-08-22 PASS 3 minutes
- 2025-08-23 PASS 3 minutes
- 2025-08-24 PASS 3 minutes
- 2025-08-25 PASS 3 minutes
- 2025-08-26 PASS 3 minutes
- 2025-08-27 PASS 3 minutes
- 2025-08-28 PASS 3 minutes
- 2025-08-29 PASS 3 minutes
- 2025-08-30 PASS 3 minutes
- 2025-08-31 PASS 3 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:22+00:00
```
2025-09-01T00:30:22.1785753Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-09-01T00:30:22.1786826Z     resource_ldap_verify_test.go:32: Creating execution project: test-acc-tf-p-8039754721047437142
2025-09-01T00:30:22.1787939Z     resource_ldap_verify_test.go:32: 
2025-09-01T00:30:22.1789470Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:22.1792236Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:22.1795028Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:120
2025-09-01T00:30:22.1798213Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:32
2025-09-01T00:30:22.1799601Z         	Error:      	Received unexpected error:
2025-09-01T00:30:22.1803508Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:22.1805505Z         	Test:       	TestAccLDAPVerify_withConfiguration_CACertificate
2025-09-01T00:30:22.1809077Z         	Messages:   	Project creation failed: test-acc-tf-p-8039754721047437142, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:22.1811225Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (0.05s)
```

  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-09-02 PASS 3 minutes
- 2025-09-03 PASS 3 minutes
- 2025-09-04 PASS 3 minutes