# ldap/ldapconfiguration/TestMigLDAPConfiguration_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL
Success rate: 99.12%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029430000) |  | qa | 0.01s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 10 seconds
- 2025-04-13 PASS 6 seconds
- 2025-04-14 PASS 10 seconds
- 2025-04-15 PASS 8 seconds
- 2025-04-16
  - PASS 10 seconds
  - PASS 6 seconds
- 2025-04-17 PASS 7 seconds
- 2025-04-18 PASS 7 seconds
- 2025-04-19 PASS 6 seconds
- 2025-04-20 PASS 7 seconds
- 2025-04-21 PASS 9 seconds
- 2025-04-22 PASS 9 seconds
- 2025-04-23 PASS 9 seconds
- 2025-04-24 PASS 8 seconds
- 2025-04-25 PASS 9 seconds
- 2025-04-26 PASS 15 seconds
- 2025-04-27 PASS 10 seconds
- 2025-04-28 PASS 11 seconds
- 2025-04-29 PASS 10 seconds
- 2025-04-30
  - PASS 10 seconds
  - PASS 11 seconds
- 2025-05-01
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 11 seconds
  - PASS 9 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 12 seconds
- 2025-05-02 PASS 11 seconds
- 2025-05-03 PASS 7 seconds
- 2025-05-04 PASS 7 seconds
- 2025-05-05 PASS 6 seconds
- 2025-05-06 PASS 7 seconds
- 2025-05-07 PASS 8 seconds
- 2025-05-08 PASS 7 seconds
- 2025-05-09 PASS 7 seconds
- 2025-05-10 PASS 7 seconds
- 2025-05-11

### Error 2025-05-11T00:29:43+00:00
```
2025-05-11T00:29:43.7735516Z === RUN   TestMigLDAPConfiguration_basic
2025-05-11T00:29:43.7737331Z     resource_ldap_configuration_migration_test.go:10: Creating execution project: test-acc-tf-p-1864687106931925625
2025-05-11T00:29:43.7738660Z     resource_ldap_configuration_migration_test.go:10: 
2025-05-11T00:29:43.7740405Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:43.7742787Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:43.7745063Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:83
2025-05-11T00:29:43.7747852Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_migration_test.go:10
2025-05-11T00:29:43.7748884Z         	Error:      	Received unexpected error:
2025-05-11T00:29:43.7749915Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.7750604Z         	Test:       	TestMigLDAPConfiguration_basic
2025-05-11T00:29:43.7751769Z         	Messages:   	Project creation failed: test-acc-tf-p-1864687106931925625, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.7755256Z --- FAIL: TestMigLDAPConfiguration_basic (0.07s)
```

- 2025-05-12 PASS 6 seconds
- 2025-05-13
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-05-14 PASS 6 seconds
- 2025-05-15 PASS 6 seconds
- 2025-05-16 PASS 10 seconds
- 2025-05-17 PASS 8 seconds
- 2025-05-18 PASS 6 seconds
- 2025-05-19 PASS 8 seconds
- 2025-05-20 PASS 7 seconds
- 2025-05-21 PASS 7 seconds
- 2025-05-22 PASS 7 seconds
- 2025-05-23 PASS 8 seconds
- 2025-05-24 PASS 8 seconds
- 2025-05-25 PASS 7 seconds
- 2025-05-26 PASS 8 seconds
- 2025-05-27 PASS 7 seconds
- 2025-05-28
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-05-29 PASS 6 seconds
- 2025-05-30 PASS 9 seconds
- 2025-05-31 PASS 10 seconds
- 2025-06-01
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 10 seconds
- 2025-06-02
  - PASS 10 seconds
  - PASS 7 seconds
  - PASS 12 seconds
- 2025-06-03 PASS 8 seconds
- 2025-06-04 PASS 7 seconds
- 2025-06-05 PASS 7 seconds
- 2025-06-06 PASS 8 seconds
- 2025-06-07 PASS 7 seconds
- 2025-06-08 PASS 7 seconds
- 2025-06-09 PASS 12 seconds
- 2025-06-10 PASS 10 seconds
- 2025-06-11
  - PASS 9 seconds
  - PASS 6 seconds
- 2025-06-12 PASS 12 seconds
- 2025-06-13 PASS 7 seconds
- 2025-06-14 PASS 7 seconds
- 2025-06-15 PASS 11 seconds
- 2025-06-16 PASS 7 seconds
- 2025-06-17 PASS 11 seconds
- 2025-06-18 PASS 11 seconds
- 2025-06-19 PASS 6 seconds
- 2025-06-20 PASS 12 seconds
- 2025-06-21 PASS 9 seconds
- 2025-06-22 PASS 10 seconds
- 2025-06-23 PASS 10 seconds
- 2025-06-24 PASS 10 seconds
- 2025-06-25 PASS 7 seconds
- 2025-06-26 PASS 7 seconds
- 2025-06-27 PASS 7 seconds
- 2025-06-28 PASS 8 seconds
- 2025-06-29 PASS 9 seconds
- 2025-06-30 PASS 8 seconds
- 2025-07-01
  - PASS 7 seconds
  - PASS 9 seconds
  - PASS 7 seconds
  - PASS 11 seconds
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-07-02 PASS 13 seconds
- 2025-07-03 PASS 9 seconds
- 2025-07-04 PASS 9 seconds
- 2025-07-05 PASS 9 seconds
- 2025-07-06 PASS 6 seconds
- 2025-07-07 PASS 7 seconds
- 2025-07-08 PASS 7 seconds
- 2025-07-09 PASS 7 seconds
- 2025-07-10 PASS 7 seconds