# config/databaseuser/TestMigConfigRSDatabaseUser_withX509TypeCustomer Test Details
# Found 6 TestRuns in dev, qa from 2026-09-09 to 2026-09-14 from master branch: 1 unique tests, PASS(x 5) FAIL
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-14 00:49](#error-2026-09-14t0049310000) |  | dev | 1.02s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09 PASS 18 seconds
- 2026-09-10 PASS 36 seconds
- 2026-09-11
  - PASS 17 seconds
  - PASS 23 seconds
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14

### Error 2026-09-14T00:49:31+00:00
```
2026-09-14T00:49:31.3710184Z === RUN   TestMigConfigRSDatabaseUser_withX509TypeCustomer
2026-09-14T00:49:31.3749002Z === CONT  TestMigConfigRSDatabaseUser_withX509TypeCustomer
2026-09-14T00:49:31.3765981Z    test_working_directory=/tmp/plugintest648012409 test_step_number=1 test_name=TestMigConfigRSDatabaseUser_withX509TypeCustomer test_terraform_path=/home/runner/work/_temp/5e50e1e6-3422-43c4-81e3-e7ff53c9a783/terraform
2026-09-14T00:49:31.3767379Z     resource_database_user_migration_test.go:49: TestStep 1/2 running init: exit status 1
2026-09-14T00:49:31.3767918Z         
2026-09-14T00:49:31.3768393Z         Error: Failed to install provider
2026-09-14T00:49:31.3768788Z         
2026-09-14T00:49:31.3769388Z         Error while installing mongodb/mongodbatlas v2.17.0: github.com: Get
2026-09-14T00:49:31.3775491Z         "https://release-assets.githubusercontent.com/github-production-release-asset/202570697/d0282d5f-9aaa-46cf-93cf-26fc14b135ad?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-09-14T01%3A27%3A13Z&rscd=attachment%3B+filename%3Dterraform-provider-mongodbatlas_2.17.0_linux_amd64.zip&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-09-14T00%3A26%3A40Z&ske=2026-09-14T01%3A27%3A13Z&sks=b&skv=2018-11-09&sig=VSjBLZNQClryO%2Br95c80vUrW4t%2BLnLsAQ4DqvhMu9zE%3D&jwt=***":
2026-09-14T00:49:31.3777601Z         read tcp 10.1.0.97:37666->185.199.109.133:443: read: connection reset by peer
2026-09-14T00:49:31.3778192Z --- FAIL: TestMigConfigRSDatabaseUser_withX509TypeCustomer (1.16s)
```


## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 29 seconds
- 2026-09-14: MISSING
