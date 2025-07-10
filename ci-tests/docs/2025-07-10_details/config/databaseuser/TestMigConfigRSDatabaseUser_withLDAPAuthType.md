# config/databaseuser/TestMigConfigRSDatabaseUser_withLDAPAuthType Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL
Success rate: 99.13%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029520000) |  | qa | 0.00s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 25 seconds
- 2025-04-13 PASS 22 seconds
- 2025-04-14 PASS 31 seconds
- 2025-04-15 PASS 21 seconds
- 2025-04-16
  - PASS 22 seconds
  - PASS 31 seconds
- 2025-04-17 PASS 23 seconds
- 2025-04-18 PASS 26 seconds
- 2025-04-19 PASS 23 seconds
- 2025-04-20 PASS 22 seconds
- 2025-04-21 PASS 22 seconds
- 2025-04-22 PASS 22 seconds
- 2025-04-23 PASS 21 seconds
- 2025-04-24 PASS 23 seconds
- 2025-04-25 PASS 23 seconds
- 2025-04-26 PASS 23 seconds
- 2025-04-27 PASS 22 seconds
- 2025-04-28 PASS 24 seconds
- 2025-04-29 PASS 23 seconds
- 2025-04-30
  - PASS 23 seconds
  - PASS 24 seconds
- 2025-05-01
  - PASS 22 seconds
  - PASS 23 seconds
  - PASS 22 seconds
  - PASS 23 seconds
  - PASS 30 seconds
  - PASS 23 seconds
  - PASS 54 seconds
- 2025-05-02 PASS 23 seconds
- 2025-05-03 PASS 22 seconds
- 2025-05-04 PASS 23 seconds
- 2025-05-05 PASS 23 seconds
- 2025-05-06 PASS 23 seconds
- 2025-05-07 PASS 22 seconds
- 2025-05-08 PASS 23 seconds
- 2025-05-09 PASS 23 seconds
- 2025-05-10 PASS 23 seconds
- 2025-05-11

### Error 2025-05-11T00:29:52+00:00
```
2025-05-11T00:29:52.9865349Z === RUN   TestMigConfigRSDatabaseUser_withLDAPAuthType
2025-05-11T00:29:52.9866612Z     resource_database_user_migration_test.go:264: Creating execution project: test-acc-tf-p-1826769968613218165
2025-05-11T00:29:52.9867720Z     resource_database_user_migration_test.go:264: 
2025-05-11T00:29:52.9869507Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:52.9893281Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:52.9897492Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_migration_test.go:264
2025-05-11T00:29:52.9899200Z         	Error:      	Received unexpected error:
2025-05-11T00:29:52.9900870Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:52.9902499Z         	Test:       	TestMigConfigRSDatabaseUser_withLDAPAuthType
2025-05-11T00:29:52.9904509Z         	Messages:   	Project creation failed: test-acc-tf-p-1826769968613218165, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:52.9905926Z --- FAIL: TestMigConfigRSDatabaseUser_withLDAPAuthType (0.01s)
```

- 2025-05-12 PASS 23 seconds
- 2025-05-13
  - PASS 23 seconds
  - PASS 24 seconds
- 2025-05-14 PASS 23 seconds
- 2025-05-15 PASS 23 seconds
- 2025-05-16 PASS 22 seconds
- 2025-05-17 PASS 22 seconds
- 2025-05-18 PASS 22 seconds
- 2025-05-19 PASS 22 seconds
- 2025-05-20 PASS 22 seconds
- 2025-05-21 PASS 22 seconds
- 2025-05-22 PASS 22 seconds
- 2025-05-23 PASS 22 seconds
- 2025-05-24 PASS 23 seconds
- 2025-05-25 PASS 23 seconds
- 2025-05-26 PASS 23 seconds
- 2025-05-27 PASS 23 seconds
- 2025-05-28
  - PASS 21 seconds
  - PASS 23 seconds
  - PASS 22 seconds
- 2025-05-29 PASS 23 seconds
- 2025-05-30 PASS 24 seconds
- 2025-05-31 PASS 22 seconds
- 2025-06-01
  - PASS 21 seconds
  - PASS 23 seconds
  - PASS 23 seconds
  - PASS 22 seconds
  - PASS 23 seconds
  - PASS 22 seconds
- 2025-06-02
  - PASS 22 seconds
  - PASS 28 seconds
  - PASS 47 seconds
- 2025-06-03 PASS 22 seconds
- 2025-06-04 PASS 23 seconds
- 2025-06-05 PASS 34 seconds
- 2025-06-06 PASS 22 seconds
- 2025-06-07 PASS 22 seconds
- 2025-06-08 PASS 22 seconds
- 2025-06-09 PASS 22 seconds
- 2025-06-10 PASS 22 seconds
- 2025-06-11
  - PASS 22 seconds
  - PASS 23 seconds
- 2025-06-12 PASS 22 seconds
- 2025-06-13 PASS 23 seconds
- 2025-06-14 PASS 23 seconds
- 2025-06-15 PASS 23 seconds
- 2025-06-16 PASS 22 seconds
- 2025-06-17 PASS 23 seconds
- 2025-06-18
  - PASS 24 seconds
  - PASS 23 seconds
- 2025-06-19 PASS 22 seconds
- 2025-06-20 PASS 23 seconds
- 2025-06-21 PASS 27 seconds
- 2025-06-22 PASS 21 seconds
- 2025-06-23 PASS 22 seconds
- 2025-06-24 PASS 23 seconds
- 2025-06-25 PASS 22 seconds
- 2025-06-26 PASS 23 seconds
- 2025-06-27 PASS 22 seconds
- 2025-06-28 PASS 21 seconds
- 2025-06-29 PASS 23 seconds
- 2025-06-30 PASS 23 seconds
- 2025-07-01
  - PASS 22 seconds
  - PASS 23 seconds
  - PASS 22 seconds
  - PASS 23 seconds
  - PASS 23 seconds
  - PASS 30 seconds
- 2025-07-02 PASS 23 seconds
- 2025-07-03 PASS 22 seconds
- 2025-07-04 PASS 23 seconds
- 2025-07-05 PASS 22 seconds
- 2025-07-06 PASS 18 seconds
- 2025-07-07 PASS 22 seconds
- 2025-07-08 PASS 22 seconds
- 2025-07-09 PASS 23 seconds
- 2025-07-10 PASS 23 seconds