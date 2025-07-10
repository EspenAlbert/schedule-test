# ldap/ldapverify/TestMigLDAPVerify_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029440000) |  | qa |  | 0.01s
[2025-06-05 00:38](#error-2025-06-05t0038180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4b9c939f274132504a2/clusters/test-acc-tf-c-2237989079657700055 | dev | flaky_500 | 184.06s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 11 minutes
- 2025-04-13 PASS 18 minutes
- 2025-04-14 PASS 11 minutes
- 2025-04-15 PASS 12 minutes
- 2025-04-16
  - PASS 10 minutes
  - PASS 18 minutes
- 2025-04-17 PASS 10 minutes
- 2025-04-18 PASS 14 minutes
- 2025-04-19 PASS 11 minutes
- 2025-04-20 PASS 14 minutes
- 2025-04-21 PASS 13 minutes
- 2025-04-22 PASS 13 minutes
- 2025-04-23 PASS 13 minutes
- 2025-04-24 PASS 12 minutes
- 2025-04-25 PASS 14 minutes
- 2025-04-26 PASS 14 minutes
- 2025-04-27 PASS 14 minutes
- 2025-04-28 PASS 13 minutes
- 2025-04-29 PASS 13 minutes
- 2025-04-30
  - PASS 13 minutes
  - PASS 14 minutes
- 2025-05-01
  - PASS 12 minutes
  - PASS 14 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 10 minutes
  - PASS 11 minutes
- 2025-05-02 PASS 13 minutes
- 2025-05-03 PASS 11 minutes
- 2025-05-04 PASS 13 minutes
- 2025-05-05 PASS 12 minutes
- 2025-05-06 PASS 13 minutes
- 2025-05-07 PASS 11 minutes
- 2025-05-08 PASS 13 minutes
- 2025-05-09 PASS 11 minutes
- 2025-05-10 PASS 13 minutes
- 2025-05-11

### Error 2025-05-11T00:29:44+00:00
```
2025-05-11T00:29:44.5628577Z === RUN   TestMigLDAPVerify_basic
2025-05-11T00:29:44.5629554Z     resource_ldap_verify_migration_test.go:10: Creating execution project: test-acc-tf-p-8503673509345449676
2025-05-11T00:29:44.5630390Z     resource_ldap_verify_migration_test.go:10: 
2025-05-11T00:29:44.5631697Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:44.5634871Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:44.5638428Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:102
2025-05-11T00:29:44.5641685Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2025-05-11T00:29:44.5644201Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_migration_test.go:10
2025-05-11T00:29:44.5645162Z         	Error:      	Received unexpected error:
2025-05-11T00:29:44.5646193Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:44.5647091Z         	Test:       	TestMigLDAPVerify_basic
2025-05-11T00:29:44.5648234Z         	Messages:   	Project creation failed: test-acc-tf-p-8503673509345449676, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:44.5649023Z --- FAIL: TestMigLDAPVerify_basic (0.05s)
```

- 2025-05-12 PASS 12 minutes
- 2025-05-13
  - PASS 11 minutes
  - PASS 12 minutes
- 2025-05-14 PASS 11 minutes
- 2025-05-15 PASS 12 minutes
- 2025-05-16 PASS 13 minutes
- 2025-05-17 PASS 11 minutes
- 2025-05-18 PASS 14 minutes
- 2025-05-19 PASS 12 minutes
- 2025-05-20 PASS 11 minutes
- 2025-05-21 PASS 11 minutes
- 2025-05-22 PASS 11 minutes
- 2025-05-23 PASS 11 minutes
- 2025-05-24 PASS 13 minutes
- 2025-05-25 PASS 14 minutes
- 2025-05-26 PASS 13 minutes
- 2025-05-27 PASS 11 minutes
- 2025-05-28
  - PASS 12 minutes
  - PASS 14 minutes
- 2025-05-29 PASS 10 minutes
- 2025-05-30 PASS 11 minutes
- 2025-05-31 PASS 11 minutes
- 2025-06-01
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 12 minutes
  - PASS 10 minutes
  - PASS 11 minutes
- 2025-06-02
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 13 minutes
- 2025-06-03 PASS 13 minutes
- 2025-06-04 PASS 11 minutes
- 2025-06-05

### Error 2025-06-05T00:38:18+00:00
```
2025-06-05T00:38:18.0650417Z === RUN   TestMigLDAPVerify_basic
2025-06-05T00:38:18.0651690Z     resource_ldap_verify_migration_test.go:10: Creating execution project: test-acc-tf-p-8177517305222901955
2025-06-05T00:38:18.0653158Z     resource_ldap_verify_migration_test.go:10: Creating execution cluster: test-acc-tf-c-2237989079657700055
2025-06-05T00:38:18.0653845Z 2025/06/05 00:28:45 [DEBUG] Waiting for state to become: [IDLE]
2025-06-05T00:38:18.0654690Z     resource_ldap_verify_migration_test.go:10: 
2025-06-05T00:38:18.0655923Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-06-05T00:38:18.0658092Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-06-05T00:38:18.0660427Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2025-06-05T00:38:18.0663195Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_migration_test.go:10
2025-06-05T00:38:18.0664451Z         	Error:      	Received unexpected error:
2025-06-05T00:38:18.0667267Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9c939f274132504a2/clusters/test-acc-tf-c-2237989079657700055 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:18.0668577Z         	Test:       	TestMigLDAPVerify_basic
2025-06-05T00:38:18.0670974Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2237989079657700055, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9c939f274132504a2/clusters/test-acc-tf-c-2237989079657700055 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:18.0672602Z --- FAIL: TestMigLDAPVerify_basic (184.63s)
```

- 2025-06-06 PASS 13 minutes
- 2025-06-07 PASS 11 minutes
- 2025-06-08 PASS 13 minutes
- 2025-06-09 PASS 11 minutes
- 2025-06-10 PASS 15 minutes
- 2025-06-11
  - PASS 11 minutes
  - PASS 14 minutes
- 2025-06-12 PASS 10 minutes
- 2025-06-13 PASS 11 minutes
- 2025-06-14 PASS 11 minutes
- 2025-06-15 PASS 13 minutes
- 2025-06-16 PASS 11 minutes
- 2025-06-17 PASS 13 minutes
- 2025-06-18 PASS 10 minutes
- 2025-06-19 PASS 11 minutes
- 2025-06-20 PASS 11 minutes
- 2025-06-21 PASS 11 minutes
- 2025-06-22 PASS 14 minutes
- 2025-06-23 PASS 11 minutes
- 2025-06-24 PASS 12 minutes
- 2025-06-25 PASS 12 minutes
- 2025-06-26 PASS 11 minutes
- 2025-06-27 PASS 11 minutes
- 2025-06-28 PASS 11 minutes
- 2025-06-29 PASS 14 minutes
- 2025-06-30 PASS 11 minutes
- 2025-07-01
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 10 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 11 minutes
- 2025-07-02 PASS 13 minutes
- 2025-07-03 PASS 11 minutes
- 2025-07-04 PASS 13 minutes
- 2025-07-05 PASS 11 minutes
- 2025-07-06 PASS 13 minutes
- 2025-07-07 PASS 11 minutes
- 2025-07-08 PASS 10 minutes
- 2025-07-09 PASS 10 minutes
- 2025-07-10 PASS 11 minutes